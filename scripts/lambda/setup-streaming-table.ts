// Script to set up the streaming server info DynamoDB table
import { DynamoDBClient, CreateTableCommand } from "@aws-sdk/client-dynamodb";
import {
	DynamoDBDocumentClient,
	PutCommand,
	GetCommand,
} from "@aws-sdk/lib-dynamodb";

const TABLE_NAME = "livestream-server-info";

const dynamodb = new DynamoDBClient({});
const docClient = DynamoDBDocumentClient.from(dynamodb);

async function createTable(): Promise<void> {
	try {
		const command = new CreateTableCommand({
			TableName: TABLE_NAME,
			KeySchema: [
				{
					AttributeName: "serverId",
					KeyType: "HASH", // Partition key
				},
			],
			AttributeDefinitions: [
				{
					AttributeName: "serverId",
					AttributeType: "S",
				},
			],
			BillingMode: "PAY_PER_REQUEST",
		});

		await dynamodb.send(command);
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
			console.error(`❌ Failed to create table ${TABLE_NAME}:`, error);
			throw error;
		}
	}
}

async function updateServerInfo(serverInfo: {
	instanceId: string;
	publicIp: string;
	rtmpUrl: string;
	streamKey: string;
	hlsUrl: string;
	region: string;
	startedAt: string;
}): Promise<void> {
	try {
		const command = new PutCommand({
			TableName: TABLE_NAME,
			Item: {
				serverId: "current", // Single record for current server
				...serverInfo,
				updatedAt: new Date().toISOString(),
			},
		});

		await docClient.send(command);
		console.log("✅ Server info updated successfully");
		console.log(`   Instance ID: ${serverInfo.instanceId}`);
		console.log(`   Public IP: ${serverInfo.publicIp}`);
		console.log(`   HLS URL: ${serverInfo.hlsUrl}`);
	} catch (error) {
		console.error("❌ Failed to update server info:", error);
		throw error;
	}
}

async function getServerInfo(): Promise<Record<string, unknown> | null> {
	try {
		const command = new GetCommand({
			TableName: TABLE_NAME,
			Key: {
				serverId: "current",
			},
		});

		const result = await docClient.send(command);
		if (result.Item) {
			console.log("✅ Current server info:");
			console.log(`   Instance ID: ${result.Item.instanceId}`);
			console.log(`   Public IP: ${result.Item.publicIp}`);
			console.log(`   HLS URL: ${result.Item.hlsUrl}`);
			console.log(`   Started: ${result.Item.startedAt}`);
			console.log(`   Updated: ${result.Item.updatedAt}`);
			return result.Item;
		}
		console.log("ℹ️  No server info found");
		return null;
	} catch (error) {
		console.error("❌ Failed to get server info:", error);
		throw error;
	}
}

async function main(): Promise<void> {
	const args = process.argv.slice(2);
	const command = args[0];

	try {
		switch (command) {
			case "setup": {
				await createTable();
				break;
			}
			case "update": {
				const serverInfo = {
					instanceId: args[1] || "",
					publicIp: args[2] || "",
					rtmpUrl: args[3] || "",
					streamKey: args[4] || "stream",
					hlsUrl: args[5] || "",
					region: args[6] || "us-west-2",
					startedAt: new Date().toISOString(),
				};
				await updateServerInfo(serverInfo);
				break;
			}
			case "get": {
				await getServerInfo();
				break;
			}
			default:
				console.log("📖 Usage:");
				console.log("  mise exec -- pnpm run setup-streaming-table");
				console.log(
					"  mise exec -- pnpm run update-streaming-info <instanceId> <publicIp> <rtmpUrl> <streamKey> <hlsUrl> <region>",
				);
				console.log("  mise exec -- pnpm run get-streaming-info");
				break;
		}
	} catch (error) {
		console.error("❌ Error:", error);
		process.exit(1);
	}
}

main();
