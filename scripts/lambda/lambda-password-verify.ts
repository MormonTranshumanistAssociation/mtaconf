// Lambda function for password verification with DynamoDB device limits
// Deploy this to AWS Lambda and call it from the frontend

import crypto from "node:crypto";
import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import {
	DynamoDBDocumentClient,
	GetCommand,
	UpdateCommand,
} from "@aws-sdk/lib-dynamodb";

// AWS Lambda event types
interface LambdaEvent {
	body?: string;
	headers?: {
		Cookie?: string;
		cookie?: string;
		[key: string]: string | undefined;
	};
	httpMethod?: string;
	requestContext?: {
		http?: {
			method?: string;
		};
	};
}

interface LambdaResponse {
	statusCode: number;
	headers: Record<string, string>;
	body: string;
}

interface PasswordRecord {
	passwordHash: string;
	devices: string[];
	createdAt: string;
	description?: string;
	lastUsed?: string;
}

interface RequestBody {
	password: string;
}

// Initialize DynamoDB client
const client = new DynamoDBClient({});
const dynamodb = DynamoDBDocumentClient.from(client);

// DynamoDB table name for storing password-device associations
const TABLE_NAME =
	process.env.PASSWORD_DEVICES_TABLE || "livestream-password-devices";

// Maximum devices per password
const MAX_DEVICES_PER_PASSWORD = 2;

// Streaming server configuration - using stable domain name
const STREAMING_DOMAIN = "stream.mtaconf.org";
const HLS_URL = `https://${STREAMING_DOMAIN}/stream.m3u8`;

// Generate a unique device ID
function generateDeviceId(): string {
	return crypto.randomBytes(16).toString("hex");
}

// Get device ID from cookie or generate new one
function getDeviceId(event: LambdaEvent): string | null {
	const cookies = event.headers?.Cookie || event.headers?.cookie || "";
	const deviceIdMatch = cookies.match(/device_id=([^;]+)/);
	return deviceIdMatch ? deviceIdMatch[1] || null : null;
}

// Get current streaming server info - using stable domain name
function getCurrentStreamingServerInfo(): string {
	return HLS_URL;
}

// Generate a signed URL for the HLS stream
function generateSignedStreamUrl(deviceId: string): string {
	const baseUrl = getCurrentStreamingServerInfo();
	const expires = Math.floor(Date.now() / 1000) + 24 * 60 * 60; // 24 hours from now
	const secret = process.env.SIGNING_SECRET;
	if (!secret) {
		throw new Error("SIGNING_SECRET environment variable is required");
	}

	// Create the signature payload
	const payload = `deviceId=${deviceId}&expires=${expires}`;
	const signature = crypto
		.createHmac("sha256", secret)
		.update(payload)
		.digest("hex");

	// Return the signed URL
	return `${baseUrl}?${payload}&signature=${signature}`;
}

export const handler = async (event: LambdaEvent): Promise<LambdaResponse> => {
	// CORS is handled by Lambda URL configuration
	const headers = {
		"Content-Type": "application/json",
	};

	// Handle preflight requests
	const httpMethod = event.requestContext?.http?.method || event.httpMethod;
	if (httpMethod === "OPTIONS") {
		return {
			statusCode: 200,
			headers,
			body: "",
		};
	}

	// Handle stream URL requests (GET requests with device cookie)
	if (httpMethod === "GET") {
		const deviceId = getDeviceId(event);
		if (!deviceId) {
			return {
				statusCode: 401,
				headers,
				body: JSON.stringify({
					success: false,
					error: "Device not authenticated",
				}),
			};
		}

		// Generate and return a new signed stream URL
		const signedStreamUrl = generateSignedStreamUrl(deviceId);
		return {
			statusCode: 200,
			headers,
			body: JSON.stringify({
				success: true,
				streamUrl: signedStreamUrl,
			}),
		};
	}

	try {
		if (!event.body) {
			return {
				statusCode: 400,
				headers,
				body: JSON.stringify({ error: "Request body required" }),
			};
		}

		const { password }: RequestBody = JSON.parse(event.body);

		if (!password) {
			return {
				statusCode: 400,
				headers,
				body: JSON.stringify({ error: "Password required" }),
			};
		}

		// Hash the provided password
		const hashedPassword = crypto
			.createHash("sha256")
			.update(password)
			.digest("hex");

		// Get or generate device ID
		let deviceId = getDeviceId(event);
		const isNewDevice = !deviceId;
		if (isNewDevice) {
			deviceId = generateDeviceId();
		}

		// Ensure deviceId is not null at this point
		if (!deviceId) {
			return {
				statusCode: 500,
				headers,
				body: JSON.stringify({
					success: false,
					error: "Failed to generate device ID",
				}),
			};
		}

		// Check if this password exists in DynamoDB
		const getCommand = new GetCommand({
			TableName: TABLE_NAME,
			Key: {
				passwordHash: hashedPassword,
			},
		});

		const result = await dynamodb.send(getCommand);
		const passwordRecord = result.Item as PasswordRecord | undefined;

		if (!passwordRecord) {
			// Password doesn't exist - invalid password
			return {
				statusCode: 401,
				headers,
				body: JSON.stringify({
					success: false,
					error: "Invalid password",
				}),
			};
		}

		// Check if this device is already registered
		const existingDevices = passwordRecord.devices || [];
		const isExistingDevice = existingDevices.includes(deviceId);

		if (isExistingDevice) {
			// Device already registered, allow access
			const signedStreamUrl = generateSignedStreamUrl(deviceId);
			return {
				statusCode: 200,
				headers: {
					...headers,
					"Set-Cookie": `device_id=${deviceId}; Path=/; HttpOnly; Secure; SameSite=None; Max-Age=31536000`, // 1 year
				},
				body: JSON.stringify({
					success: true,
					message: "Authentication successful",
					deviceId: deviceId,
					streamUrl: signedStreamUrl,
				}),
			};
		}

		// Check if we can add a new device
		if (existingDevices.length >= MAX_DEVICES_PER_PASSWORD) {
			return {
				statusCode: 403,
				headers,
				body: JSON.stringify({
					success: false,
					error:
						"This password can be associated with up to two devices at most. Please purchase another remote pass if you wish to view it on more than two devices.",
				}),
			};
		}

		// Add new device to the password record
		const updatedDevices = [...existingDevices, deviceId];
		const updateCommand = new UpdateCommand({
			TableName: TABLE_NAME,
			Key: {
				passwordHash: hashedPassword,
			},
			UpdateExpression: "SET devices = :devices, lastUsed = :timestamp",
			ExpressionAttributeValues: {
				":devices": updatedDevices,
				":timestamp": new Date().toISOString(),
			},
		});

		await dynamodb.send(updateCommand);

		// Return success with device cookie and signed stream URL
		const signedStreamUrl = generateSignedStreamUrl(deviceId);
		return {
			statusCode: 200,
			headers: {
				...headers,
				"Set-Cookie": `device_id=${deviceId}; Path=/; HttpOnly; Secure; SameSite=None; Max-Age=31536000`, // 1 year
			},
			body: JSON.stringify({
				success: true,
				message: "Authentication successful",
				deviceId: deviceId,
				streamUrl: signedStreamUrl,
				devicesUsed: updatedDevices.length,
				maxDevices: MAX_DEVICES_PER_PASSWORD,
			}),
		};
	} catch (error) {
		console.error("Error in password verification:", error);
		return {
			statusCode: 500,
			headers,
			body: JSON.stringify({
				success: false,
				error: "Internal server error",
			}),
		};
	}
};
