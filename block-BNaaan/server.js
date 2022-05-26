const http = require("http");

let server = http.createServer(handleRequest);
function handleRequest(req, res) {
  console.log(req.method, req.url);
  console.log(req.headers);
  res.end("Welcome");
}
server.listen(3000, () => {
  console.log("server is listening on port 3k");
});
