let http = require("http");

let server = http.createServer(hanldeRequest);

function hanldeRequest(req, res) {
  res.end(JSON.stringify(req.headers));
}

server.listen(7000, () => {
  console.log("server listening on port 7000");
});
