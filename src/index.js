import http from "http";

const server = http.createServer((req, res) => {

    res.writeHead(200)
    res.end("hello")
})

server.listen(4000)