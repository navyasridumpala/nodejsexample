const express = require('express');
const app = express();
app.get('/',(req,res) => {
res.send("Hello World, I am from Nodejs");
});
app.listen(3060,() => {
console.log("Server is running on port 306S0")
});