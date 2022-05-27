let http = require("http");

let server = http.createServer(hanldeRequest);

function hanldeRequest(req, res) {
  console.log(req.url, req.method);
  res.end(`request url: ${req.url} and request method: ${req.method}`);
}

server.listen(5566, () => {
  console.log("server listening on port 5566");
});
