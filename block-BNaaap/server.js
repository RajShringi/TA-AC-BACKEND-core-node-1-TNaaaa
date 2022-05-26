let http = require("http");

let server = http.createServer(handleRequest);

function handleRequest(req, res) {
  console.log(req.method);
  res.writeHead(201, { "Content-Type": "text/html" });
  res.write("<h1>HELLO</h1>");
  res.end("Welcome");
}
server.listen(4444, () => {
  console.log("server is listening on 4444");
});
