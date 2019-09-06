var express = require("express");
var app = express();
var port = process.env.PORT || 3000;
app.listen(port);
app.get("/",function  (req,res){
    res.send("<h1>Phuc Binz</h1>")
});