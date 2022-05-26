const http = require("http");
const url = require("url");

let server = http.createServer(handleRequest);

function handleRequest(req, res) {
  let parsedUrl = url.parse(req.url, true);
  let pathname = parsedUrl.pathname;
  console.log(req.method, pathname);
  if (req.method === "GET" && pathname === "/") {
    res.end("Welcome to homepage");
  } else if (req.method === "GET" && pathname === "/about") {
    res.setHeader("Content-Type", "text/html");
    res.end("<h2>this is all about NodeJS</h2>");
  } else if (req.method === "POST" && pathname === "/about") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(`{"message": "this is a post request"}`);
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Page not found");
  }
}
server.listen(5000, () => {
  console.log("server is listening on port 5k");
});
