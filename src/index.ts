import { S3 } from "aws-sdk";
const s3 = new S3({ apiVersion: "2006-03-01" });
const Bucket: string = process.env.S3_BUCKET;

export const handler = async (): Promise<any> => {
  const result = await s3.listObjectsV2({ Bucket }).promise();

  return {
    statusCode: 200,
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(result, null, 2)
  }
}
