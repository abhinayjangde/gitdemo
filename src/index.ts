import express from "express";
import type { Express, Request, Response } from "express";
import env from "./config/env.js";
import { createPresignedUrlWithClient } from "./lib/s3.js";

const app: Express = express();
const port = env.port;

app.get("/", (req: Request, res: Response) => {
    res.status(200).json({
        success: true,
        message: "ok",
    });
});

app.get("/get-presigned-url", async (req: Request, res: Response) => {

    const url = await createPresignedUrlWithClient({ bucket: env.aws.s3_bucket_name, key: "file.jpeg" })


    res.status(200).json({
        success: true,
        message: "ok",
        url,
    });
});

app.listen(port, (err) => {
    console.log(`server is running at http://localhost:${port}`);
});
