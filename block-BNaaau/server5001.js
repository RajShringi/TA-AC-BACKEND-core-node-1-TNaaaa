let http = require("http");

let server = http.createServer(hanldeRequest);

function hanldeRequest(req, res) {
  res.end("My first server in NodeJS");
}

server.listen(5001, () => {
  console.log("server listening on port 5001");
});
