import http from "http";

const server = http.createServer((req, res) => {

    res.writeHead(200)
    res.end("hello")
})

server.listen(process.env.PORT, () => {
    console.log("server is running at 4000")
})