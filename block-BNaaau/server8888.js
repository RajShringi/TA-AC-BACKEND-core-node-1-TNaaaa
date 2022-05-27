let http = require("http");

let server = http.createServer(hanldeRequest);

function hanldeRequest(req, res) {
  res.writeHead(201, { "Content-Type": "application/json" });
  res.end(`{"success": true, "message": "Welcome to Nodejs"}`);
}

server.listen(8888, () => {
  console.log("server listening on port 8888");
});
