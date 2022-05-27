let http = require("http");

let server = http.createServer(hanldeRequest);

function hanldeRequest(req, res) {
  if (req.method === "POST" && req.url === "/index") {
    res.writeHead(201, { "Content-Type": "text/html" });
    res.end(`<h2>posted for first time</h2>`);
  }
}

server.listen(5050, () => {
  console.log("server listening on port 5050");
});
