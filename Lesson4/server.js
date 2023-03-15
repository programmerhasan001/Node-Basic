// require all from server
const http = require("http");
const port = 3100;
const hostname = '127.0.0.1'; // local host ip

// creating server
const myServer = http.createServer((req, res) => {

    res.end("Hello I am from server")
    // res.end("<h1>Hello I am from server</h1>")
});

// setting port and displaying success message to console
myServer.listen(port, hostname, () => {
    console.log("Successful")
    console.log(`Server is running at http://${hostname}:${port}`)
})