import express from "express";

const app = express();

const port = process.env.PORT ?? 9000;

app.get("/", (req, res) => {
    res.status(200).json({
        success: true,
        message: "ok"
    })
})

app.listen(port, (err) => {
    console.log(`server is running at http://localhost:${port}`);
})