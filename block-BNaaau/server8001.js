let http = require("http");

let server = http.createServer(hanldeRequest);

function hanldeRequest(req, res) {
  res.writeHead(201, { "Content-Type": "text/html" });
  res.end("<h3>Welcome to altcampus</h3>");
}

server.listen(8001, () => {
  console.log("server listening on port 8001");
});
