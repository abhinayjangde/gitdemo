import express from "express";
import cors from "cors";
import { v4 as uuidv4 } from "uuid";
import { createPresignedUrlWithClient } from "./lib/s3.js";
import env from "./config/env.js";
import ProductModel from "./models/product.model.js";
import db from "./lib/db.js";
const app = express();
const port = env.port;
app.use(cors());
app.use(express.json());
db();
app.get("/", (req, res) => {
    res.status(200).json({
        success: true,
        message: "ok",
    });
});
app.post("/get-presigned-url", async (req, res) => {
    const { mime } = req.body;
    const filename = uuidv4();
    const finalName = `${filename}.${mime}`;
    const url = await createPresignedUrlWithClient({ bucket: env.aws.s3_bucket_name, key: finalName });
    res.status(200).json({
        success: true,
        message: "ok",
        url,
        finalName
    });
});
app.post("/api/products", async (req, res) => {
    const { name, description, price, image } = req.body;
    // TODO: validate the request using zod
    if (!name || !description || !price || !image) {
        return res.status(400).json({
            success: false,
            message: "Missing required fields"
        });
    }
    // save to database
    // TODO: handler errors
    const product = await ProductModel.create({
        name,
        description,
        price,
        image
    });
    res.status(200).json({
        success: true,
        message: "Product created successfully"
    });
});
app.listen(port, (err) => {
    console.log(`server is running at http://localhost:${port}`);
});
//# sourceMappingURL=index.js.map