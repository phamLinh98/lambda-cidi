/* Print TXT content uploaded to S3 */
import { S3 } from "aws-sdk";
const s3 = new S3();

export async function handler(event) {
  for (const record of event.Records) {
    const bucket = record.s3.bucket.name;
    const key = decodeURIComponent(record.s3.object.key.replace(/\+/g, " "));

    const { Body } = await s3.getObject({ Bucket: bucket, Key: key }).promise();
    const content = Body.toString("utf-8");

    console.log(`==> Received file: s3://${bucket}/${key}`);
    console.log(`==> Content:\n${content}`);
  }
}
