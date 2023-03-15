// os , path ( built in module ) OS for operating system
// requrie all from os
const os = require("os");
// require needed from os
const { totalmem, freemem } = require("os")
console.log(os.userInfo());
console.log(os.homedir());
console.log(os.hostname());
console.log(totalmem()) // total memory
console.log(freemem())   // free memeory

console.log(__dirname)
console.log(__filename)

// require all from path
const path = require("path")

const extensionName = path.extname("index.html");
// console.log(extensionName)

const joinName = path.join(__dirname + "/views")
console.log(joinName)