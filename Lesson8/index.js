const http = require('http');
const fs = require('fs');

const PORT = 3100;

const manageReadFile = (statusCode, fileLocation, req, res) => {
    fs.readFile(fileLocation, (err, data) => {
        res.writeHead(statusCode, { "Content-Type": "text/html" });
        res.write(data);
        res.end();
    });
}
const server = http.createServer((req, res) => {
    const url = req.url;


    if (url === '/') {
        manageReadFile(200, 'index.html', req, res)
    } else if (url === '/about') {
        manageReadFile(200, 'about.html', req, res)
    } else if (url === '/contact') {
        manageReadFile(200, 'contact.html', req, res)
    } else {
        manageReadFile(404, 'error.html', req, res)
    }
})


server.listen(PORT, () => {
    console.log(`server is running`)
})