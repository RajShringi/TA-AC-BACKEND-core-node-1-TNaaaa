let http = require("http");
let fs = require("fs");
let server = http.createServer(handleRequest);

function handleRequest(req, res) {
  console.log(req.url);
  if (req.method === "GET" && req.url === "/") {
    res.setHeader("Content-Type", "text/html");
    fs.createReadStream("../../index.html").pipe(res);
  } else if (req.method === "GET" && req.url === "/about") {
    res.setHeader("Content-Type", "text/html");
    fs.createReadStream("../../about.html").pipe(res);
  } else if (req.method === "GET" && req.url === "/blog") {
    res.setHeader("Content-Type", "text/html");
    fs.createReadStream("../../blog.html").pipe(res);
  } else if (req.method === "GET" && req.url === "/cases") {
    res.setHeader("Content-Type", "text/html");
    fs.createReadStream("../../cases.html").pipe(res);
  } else if (req.method === "GET" && req.url === "/contact") {
    res.setHeader("Content-Type", "text/html");
    fs.createReadStream("../../contact.html").pipe(res);
  } else if (req.method === "GET" && req.url === "/services") {
    res.setHeader("Content-Type", "text/html");
    fs.createReadStream("../../services.html").pipe(res);
  } else if (req.url.split(".").pop() === "css") {
    res.setHeader("Content-Type", "text/css");
    fs.readFile("../stylesheet/style.css", (err, content) => {
      if (err) return console.log(err);
      res.end(content);
    });
  } else if (
    req.url.split(".").pop() === "png" ||
    req.url.split(".").pop() === "jpg"
  ) {
    res.setHeader("Content-Type", "image/png");
    fs.readFile("../../" + req.url, (err, content) => {
      if (err) return console.log(err);
      res.end(content);
    });
  } else {
    res.end("page not found");
  }
}

server.listen(3000, () => {
  console.log("server is listening of port 3000");
});
