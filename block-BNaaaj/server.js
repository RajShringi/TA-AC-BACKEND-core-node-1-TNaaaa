let { parse } = require("url");
const parsedUrl = parse(
  "https://airindia.com/fares/calculate?from=delhi&to=detroit",
  true
);
console.log(parsedUrl.query);
console.log(parsedUrl.pathname);
console.log(parsedUrl.protocol);
