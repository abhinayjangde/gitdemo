import "dotenv/config";

const _env = {
    port: process.env.PORT ?? 9000,
    mongodb_url: process.env.MONGODB_URL ?? "mongodb://root:example@localhost:27017/ecommerce?authSource=admin",
    aws: {
        s3_access_key: process.env.AWS_S3_ACCESS_KEY ?? "",
        s3_secret_key: process.env.AWS_S3_SECRET_KEY ?? "",
        s3_region: process.env.AWS_S3_REGION ?? "ap-south-1",
        s3_bucket_name: process.env.AWS_S3_BUCKET_NAME ?? "gitdemo-bucket",
    }
}

export default Object.freeze(_env);