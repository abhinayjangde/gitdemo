import express from "express";
import type { Express, Request, Response } from "express";
const app: Express = express();

const port = process.env.PORT ?? 9000;

app.get("/", (req: Request, res: Response) => {
    res.status(200).json({
        success: true,
        message: "ok",
    });
});

app.listen(port, (err) => {
    console.log(`server is running at http://localhost:${port}`);
});
