// require file system
const fs = require('fs');

// console.log(fs);

// write file with fs
fs.writeFile('demo1.txt', "My Name is Md. Hasan.", (err) => {
    if (err) {
        console.log(err)
    } else {
        console.log("Successful")
    }
})


// append file with fs
fs.appendFile("demo1.txt", "My age is 26.", (err) => {
    if (err) {
        console.log(err)
    } else {
        console.log("successfully added")
    }
})


// read file with fs
fs.readFile("demo1.txt", 'utf-8', (err, data) => {
    if (err) {
        console.log(err);
    } else {
        console.log(data);
    }
})

// rename file with fs
fs.rename("demo1.txt", "demo2.txt", (err) => {
    if (err) {
        console.log(err)
    } else {
        console.log("successfully renamed")
    }
})

// delete file with fs
fs.unlink("demo2.txt", (err) => {
    if (err) {
        console.log(err)
    } else {
        console.log("successfully deleted")
    }
})

// is exists file with fs
fs.exists("demo2.txt", (result) => {
    if (result) {
        console.log("found")
    } else {
        console.log("not found")
    }
})