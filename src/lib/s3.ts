import { PutObjectCommand, S3Client } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import env from "../config/env.js";

interface PresignedURLTypes {
    bucket: string;
    key: string;
}

/**
 * Initialize the S3 client
 */
const s3Client = new S3Client({
    region: env.aws.s3_region,

    credentials: {
        accessKeyId: env.aws.s3_access_key,
        secretAccessKey: env.aws.s3_secret_key,
    }

});

const createPresignedUrlWithClient = ({ bucket, key }: PresignedURLTypes) => {
    const command = new PutObjectCommand({
        Bucket: bucket,
        Key: key,
    });
    return getSignedUrl(s3Client, command, { expiresIn: 3600 });
}

export { createPresignedUrlWithClient };