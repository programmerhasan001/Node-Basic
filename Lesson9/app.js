const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("Requested Home page")
    res.end();
})
app.post("/", (req, res) => {
    res.send(JSON.stringify({ data: "post request data description" }))
    res.end();
})
app.get("/about", (req, res) => {
    res.send("About page by dynamic route");
    res.end();
})

module.exports = app;