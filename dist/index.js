import express from "express";
import env from "./config/env.js";
import { createPresignedUrlWithClient } from "./lib/s3.js";
const app = express();
const port = env.port;
app.get("/", (req, res) => {
    res.status(200).json({
        success: true,
        message: "ok",
    });
});
app.get("/get-presigned-url", async (req, res) => {
    const url = await createPresignedUrlWithClient({ bucket: env.aws.s3_bucket_name, key: "file.jpeg" });
    res.status(200).json({
        success: true,
        message: "ok",
        url,
    });
});
app.listen(port, (err) => {
    console.log(`server is running at http://localhost:${port}`);
});
//# sourceMappingURL=index.js.map