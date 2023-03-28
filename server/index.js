const http = require('http');

const PORT = 3001;
const hostname = '127.0.0.1';

const server = http.createServer((req, res) => {
    res.write("Welcome to server");
    res.end();
})

server.listen(PORT, hostname, () => {
    console.log("Successful")
    console.log(`Server is running at http://${hostname}:${PORT}`)
})
