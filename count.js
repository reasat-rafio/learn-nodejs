// module.exports.counter = (arr) => {
//     return `There are ${arr.length} element in this array `;
//   };

//   module.exports.adder = (a, b) => {
//     return `The sum of the two number is ${a + b}`;
//   };

//   module.exports.pi = 3.1413;

// const events = require("events");
// const util = require("util");
// let myEmitter = new events.EventEmitter();

// myEmitter.on("someEvent", function (x) {
//   console.log(x);
// });

// myEmitter.emit("someEvent", "then event was emmited");

// const eventEmit = require("events");
// const util = require("util");

// const Person = function (name) {
//   this.name = name;
// };

// util.inherits(Person, eventEmit.EventEmitter);

// const al = new Person("al");
// const reasat = new Person("reasat");
// const rafio = new Person("rafio");

// const me = [al, reasat, rafio];

// me.forEach((raf) => {
//   raf.on("says", (mss) => {
//     console.log(`${raf.name} says ${mss}`);
//   });
// });

// reasat.emit("says", "Tmi");
// rafio.emit("says", "parba");

// const fs = require("fs");

// const readme = fs.readFileSync("readme.txt", "utf8");
// fs.writeFileSync("writeMe.txt", readme);

// fs.readFile("readme.txt", "utf8", function (err, data) {
//   fs.writeFile("newFile.txt", "sdada");
// });

// const fs = require("fs");

// fs.unlink("./write.txt", (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("done");
//   }
// });

// fs.readFile("readme.txt", "utf8", (err, data) => {
//   fs.writeFileSync("write.txt", "asd");
// });

// fs.mkdir("stuff", () => {
//   fs.readFile("readme.txt", "utf8", (err, data) => {
//     fs.writeFile("./stuff/writeme.txt", data, (err, data) => {
//       fs.unlink("./stuff/writeme.txt", (err, data) => {
//         fs.rmdir("./stuff", (err, data) => {
//           if (err) {
//             console.log(err);
//           } else {
//             console.log("done");
//           }
//         });
//       });
//     });
//   });
// });

// const fs = require("fs");
// const http = require("http");
// const myReadStream = fs.createReadStream(__dirname + "/write.txt", "utf8");

// myReadStream.on("data", (chunk) => {
//   console.log(chunk);
// });

////////////////////////HTML//////////////////////

// const http = require("http");
// const fs = require("fs");

// const server = http.createServer((req, res) => {
//   res.writeHead(200, { "Content-Type": "text/html" });

//   const myReadStream = fs.createReadStream(__dirname + "/index.html", "utf8");

//   myReadStream.pipe(res);
// });

// server.listen(5000, "localhost");

//////////////////////JSON//////////////////

// const http = require("http");
// const fs = require("fs");

// const server = http.createServer((req, res) => {
//   res.writeHead(200, { "Content-Type": "application/json" });
//   const myObj = {
//     name: "raf",
//     job: "CEO",
//     age: 29,
//   };
//   res.end(JSON.stringify(myObj));
// });

// server.listen(4000, "localhost");

//////////////////////// Server Routing ///////////////////
// const http = require("http");
// const fs = require("fs");

// const server = http.createServer((req, res) => {
//   console.log(req.url);
//   if (req.url === "/home" || req.url === "/") {
//     res.writeHead(200, { "Content-Type": "text/html" });
//     fs.createReadStream(__dirname + "/index.html").pipe(res);
//   } else if (req.url === "/contact-me") {
//     res.writeHead(200, { "Content-Type": "text/html" });
//     fs.createReadStream(__dirname + "/contact.html").pipe(res);
//   } else if (req.url === "/api/momtaj") {
//     const momtaj = [
//       {
//         name: "momtaj",
//         house: "4",
//         isSuccessful: true,
//       },
//       {
//         name: "raf and raf",
//         house: "4",
//         isSuccessful: true,
//       },
//     ];
//     res.writeHead(200, { "Content-Type": "application/json" });
//     res.end(JSON.stringify(momtaj));
//   } else {
//     res.writeHead(404, { "Content-Type": "text/html" });
//     fs.createReadStream(__dirname + "/404.html").pipe(res);
//   }
// });

// server.listen(3000, "localhost");

////////////////////////////////EXPRESS///////////////////////////

const express = require("express");
const { render } = require("ejs");

const app = express();

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/contact", (req, res) => {
  res.render("contact");
});

app.get("/profile/:name", (req, res) => {
  let data = { age: 29, job: "ninja", hobbies: ["Song", "Gaming", "Guitar"] };
  res.render("profile", {
    person: req.params.name,
    data,
  });
});

app.listen(3000, "localhost");
