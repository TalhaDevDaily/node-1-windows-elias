// console.log(`Hello`);

// let a = 10;
// let b = 20;
// console.log(a + b);

// console.log(global);

/////////////////////////////////

// const fs = require("fs");
// fs.readFile("text.txt", "utf-8", (err, data) => {
//   if (err) {
//     console.log(err);
//     return;
//   }

//   console.log(data);
// });

// console.log(`End code`);

/////////////////////////////////

// const fs = require("fs");

// const data = fs.readFileSync("text.txt", "utf-8");
// console.log(data);

/////////////////////////////////

/*
const fs = require("fs");

setTimeout(() => {
  fs.writeFile(
    "text.txt",
    "Since launching his teaching career online in 2015, \nhe has reached over 2.2 million students worldwide with a stellar average rating of 4.7/5 from more than 500,000 reviews.",
    (err, data) => {
      if (err) {
        console.log(`The file was unable to run: ${err}`);
        return;
      } else {
        console.log(`File ran successfully: ${data}`);
      }
    },
  );
}, 2000);

setTimeout(() => {
  fs.appendFile(
    "text.txt",
    " Based in Faro, Portugal, \nSchmedtmann holds a Master’s degree in Engineering and has been building professional websites and applications since 2010.",
    (err, data) => {
      console.log(err);
    },
  );
}, 4000);
*/

/*
const path = require("path");
console.log("Directory name: ", __dirname);
console.log("Directory name: ", __filename);
console.log("Directory name: ", path.dirname(__filename));

const fullPath = path.join("/users", "docs", "file.txt");
console.log(fullPath); // Output depends on OS
*/

/*
const os = require("os");
// Basic system information
console.log(`OS Platform: ${os.platform()}`);
console.log(`OS Type: ${os.type()}`);
console.log(`OS Release: ${os.release()}`);
console.log(`CPU Architecture: ${os.arch()}`);
console.log(`Hostname: ${os.hostname()}`);

// Memory information
const totalMemGB = (os.totalmem() / (1024 * 1024 * 1024)).toFixed(2);
const freeMemGB = (os.freemem() / (1024 * 1024 * 1024)).toFixed(2);
console.log(`Memory: ${freeMemGB}GB free of ${totalMemGB}GB`);

// User information
const userInfo = os.userInfo();
console.log(`Current User: ${userInfo.username}`);
console.log(`Home Directory: ${os.homedir()}`);
*/

const http = require("http");

const server = http.createServer((req, res) => {
  res.end("Hello World\n");
});

server.listen(8000, () => console.log(`Server is running`));
