let http = require("http");
let fs = require("fs");

let server = http.createServer(handleRequest);

function handleRequest(req, res) {
  if (req.method === "GET" && req.url === "/file") {
    fs.readFile("./node.html", (err, content) => {
      res.setHeader("Content-Type", "text/html");
      res.end(content);
    });
  } else if (req.method === "GET" && req.url === "/stream") {
    fs.createReadStream("./node.html").pipe(res);
  }
}

server.listen(5555, () => {
  console.log("server is listening on port 5555");
});
