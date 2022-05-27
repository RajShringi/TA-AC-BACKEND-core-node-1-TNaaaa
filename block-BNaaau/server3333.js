let http = require("http");

let server = http.createServer(hanldeRequest);

function hanldeRequest(req, res) {
  res.statusCode = 202;
  res.end(res.statusCode);
}

server.listen(3333, () => {
  console.log("server listening on port 3333");
});
