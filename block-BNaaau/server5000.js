let http = require("http");

let server = http.createServer(hanldeRequest);

function hanldeRequest(req, res) {
  console.log("Request", req);
  console.log("Response", res);
  res.end("Welcome");
}

server.listen(5000, () => {
  console.log("server listening on port 5k");
});

// let http = require("http");

// let server = http.createServer(hanldeRequest);

// function hanldeRequest(req, res) {
//   res.end("Welcome");
// }

// server.listen(5000, () => {
//   console.log("server listening on port 5k");
// });
