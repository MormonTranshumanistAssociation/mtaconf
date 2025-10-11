// Script to set up DynamoDB table and add passwords
// Run with: node setup-dynamodb.js

import { DynamoDBClient, CreateTableCommand } from "@aws-sdk/client-dynamodb";
import {
	DynamoDBDocumentClient,
	PutCommand,
	ScanCommand,
	DeleteCommand,
} from "@aws-sdk/lib-dynamodb";
import crypto from "node:crypto";

// Set AWS profile to mta
process.env.AWS_PROFILE = "mta";
process.env.AWS_REGION = "us-west-2";

// Initialize DynamoDB clients
const client = new DynamoDBClient({});
const dynamodb = DynamoDBDocumentClient.from(client);
const dynamodbTable = client; // For table operations

const TABLE_NAME = "livestream-password-devices";

interface PasswordItem {
	passwordHash: string;
	devices: string[];
	createdAt: string;
	description?: string;
	lastUsed?: string;
}

// Create the DynamoDB table
async function createTable(): Promise<void> {
	const command = new CreateTableCommand({
		TableName: TABLE_NAME,
		KeySchema: [
			{
				AttributeName: "passwordHash",
				KeyType: "HASH", // Partition key
			},
		],
		AttributeDefinitions: [
			{
				AttributeName: "passwordHash",
				AttributeType: "S",
			},
		],
		BillingMode: "PAY_PER_REQUEST", // On-demand billing
	});

	try {
		await dynamodbTable.send(command);
		console.log(`✅ Table ${TABLE_NAME} created successfully`);
	} catch (error: unknown) {
		if (
			error &&
			typeof error === "object" &&
			"name" in error &&
			error.name === "ResourceInUseException"
		) {
			console.log(`ℹ️  Table ${TABLE_NAME} already exists`);
		} else {
			console.error("❌ Error creating table:", error);
			throw error;
		}
	}
}

// Add a password to the table
async function addPassword(password: string, description = ""): Promise<void> {
	const passwordHash = crypto
		.createHash("sha256")
		.update(password)
		.digest("hex");

	const command = new PutCommand({
		TableName: TABLE_NAME,
		Item: {
			passwordHash: passwordHash,
			devices: [],
			createdAt: new Date().toISOString(),
			description: description,
		} as PasswordItem,
	});

	try {
		await dynamodb.send(command);
		console.log(`✅ Password added: ${description || "No description"}`);
		console.log(`   Hash: ${passwordHash}`);
	} catch (error) {
		console.error("❌ Error adding password:", error);
		throw error;
	}
}

// List all passwords in the table
async function listPasswords(): Promise<void> {
	const command = new ScanCommand({
		TableName: TABLE_NAME,
	});

	try {
		const result = await dynamodb.send(command);
		console.log("\n📋 Current passwords in table:");
		result.Items?.forEach((item: unknown, index: number) => {
			const passwordItem = item as PasswordItem;
			console.log(
				`${index + 1}. ${passwordItem.description || "No description"}`,
			);
			console.log(`   Hash: ${passwordItem.passwordHash}`);
			console.log(
				`   Devices: ${passwordItem.devices ? passwordItem.devices.length : 0}/2`,
			);
			console.log(`   Created: ${passwordItem.createdAt}`);
			console.log("");
		});
	} catch (error) {
		console.error("❌ Error listing passwords:", error);
		throw error;
	}
}

// Remove a password by hash
async function removePassword(hash: string): Promise<void> {
	try {
		const command = new DeleteCommand({
			TableName: TABLE_NAME,
			Key: {
				passwordHash: hash,
			},
		});

		await dynamodb.send(command);
		console.log(`✅ Password with hash ${hash} removed successfully`);
	} catch (error) {
		console.error(`❌ Failed to remove password with hash ${hash}:`, error);
		throw error;
	}
}

// Main function
async function main(): Promise<void> {
	const args = process.argv.slice(2);
	const command = args[0];

	try {
		switch (command) {
			case "create-table":
				await createTable();
				break;

			case "add-password": {
				const password = args[1];
				const description = args[2] || "";
				if (!password) {
					console.error(
						"❌ Please provide a password: mise exec -- pnpm run add-password <password> [description]",
					);
					process.exit(1);
				}
				await addPassword(password, description);
				break;
			}

			case "list":
				await listPasswords();
				break;

			case "remove-password": {
				const hash = args[1];
				if (!hash) {
					console.error(
						"❌ Please provide a password hash: mise exec -- pnpm run remove-password <hash>",
					);
					process.exit(1);
				}
				await removePassword(hash);
				break;
			}

			case "setup":
				console.log("🚀 Setting up DynamoDB table...");
				await createTable();

				// Add your actual passwords here
				// await addPassword("your_password_here", "Description");

				console.log("\n✅ Setup complete!");
				console.log("📝 Next steps:");
				console.log(
					"1. Add your actual passwords using: mise exec -- pnpm run add-password <password> [description]",
				);
				console.log("2. Deploy the Lambda function");
				console.log("3. Update the frontend with your Lambda URL");
				break;

			default:
				console.log("📖 Usage:");
				console.log("  mise exec -- pnpm run setup");
				console.log(
					"  mise exec -- pnpm run add-password <password> [description]",
				);
				console.log("  mise exec -- pnpm run list-passwords");
				console.log("  mise exec -- pnpm run remove-password <hash>");
				console.log("  mise exec -- pnpm run setup");
				break;
		}
	} catch (error) {
		console.error("❌ Script failed:", error);
		process.exit(1);
	}
}

// Run the script
main();
