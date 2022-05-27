let http = require("http");

let server = http.createServer(hanldeRequest);

function hanldeRequest(req, res) {
  console.log(req.headers);
  res.end(req.headers["user-agent"]);
}

server.listen(5555, () => {
  console.log("server listening on port 5555");
});
