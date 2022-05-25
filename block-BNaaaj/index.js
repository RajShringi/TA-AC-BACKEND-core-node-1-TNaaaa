let os = require("os");
let { readFile, unlink } = require("fs");
console.log("Welcome to Nodejs");
console.log(os.cpus().length, os.freemem(), os.uptime(), os.version());

let buff1 = Buffer.alloc(12);
buff1.write("Hello NodeJS");
console.log(buff1.toString());

// block code
console.time("for loop");
for (let i = 0; i < 10000000000; i++) {}
console.timeEnd("for loop");
console.log("for loop execution end");

// non-blocking code
console.log("one");
setTimeout(() => console.log("second"), 1000);
console.log("two");
