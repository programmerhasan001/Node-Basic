const http = require("http");
const file = require("fs");

const PORT = 3200;
const hostName = "127.0.0.1";

const server = http.createServer((req, res) => {
  console.log(req.url, "url");
  const url = req.url;

  if (url === "/") {
    file.readFile("./views/home.html", (err, data) => {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
    });
  } else if (url === "/about") {
    file.readFile("./views/about.html", (err, data) => {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
    });
  } else if (url === "/contact") {
    file.readFile("./views/contact.html", (err, data) => {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
    });
  } else {
    file.readFile("./views/error.html", (err, data) => {
      res.writeHead(404, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
    });
  }
});

server.listen(PORT, hostName, () => {
  console.log(`server is running at http://${hostName}:${PORT}`);
});
