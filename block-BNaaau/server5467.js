let http = require("http");
let url = require("url");
let server = http.createServer(hanldeRequest);

function hanldeRequest(req, res) {
  let parsedUrl = url.parse(req.url, true);
  console.log(parsedUrl.pathname);
  console.log(req.url);
  res.end(`{"email: ${parsedUrl.query.email}"}`);
}

server.listen(5467, () => {
  console.log("server listening on port 5467");
});
