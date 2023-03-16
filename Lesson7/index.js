const http = require("http");

const port = 3200;
const hostname = '127.0.0.1';

const server = http.createServer((req, res) => {
    res.end("<h1>Welcome to the server!!</h1>")
})


server.listen(port, hostname, () => {
    console.log(`server is running at http://${hostname}:${port}`)
})