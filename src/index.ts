import { S3 } from "aws-sdk";
const s3 = new S3({ apiVersion: "2006-03-01" });
const Bucket = "mryhryki-temp";

export const handler = async (): Promise<any> => {
  const result = await s3.listObjectsV2({ Bucket, Prefix: "", MaxKeys: 1000 }).promise();

  return {
    statusCode: 200,
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(result, null, 2)
  }
}
