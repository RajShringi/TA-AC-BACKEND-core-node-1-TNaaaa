let fs = require("fs");

console.log("execution start");
fs.readFile("./content.md", (err, content) => {
  console.log(content.toString());
});
let result = fs.readFileSync("./content.md", "utf-8");
console.log(result);
let buff1 = Buffer.alloc(10);
console.log(buff1);
buff1.write("Welcome to Buffer");
console.log(buff1.toString());
console.log("execution end");
