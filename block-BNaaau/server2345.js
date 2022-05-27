let http = require("http");
let fs = require("fs");
let server = http.createServer(hanldeRequest);

function hanldeRequest(req, res) {
  if (req.method === "GET" && req.url === "/") {
    res.writeHead(201, { "Content-Type": "text/plain" });
    res.end(`Raj Shringi`);
  } else if (req.method === "GET" && req.url === "/about") {
    res.writeHead(201, { "Content-Type": "text/html" });
    res.end("<h2>Raj Shringi</h2>");
  } else if (req.method === "GET" && req.url === "/users") {
    fs.createReadStream("./form.html").pipe(res);
  } else if (req.method === "POST" && req.url === "/users") {
    res.end("Posted for the second time");
  } else {
    res.statusCode = 400;
    res.end("Page not found");
  }
}

server.listen(2345, () => {
  console.log("server listening on port 2345");
});
