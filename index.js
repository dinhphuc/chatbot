var express = require("express");
var app = express();
var port = process.env.PORT || 3000;
app.listen(port);
app.use(express.static(__dirname + '/public'));
app.set("view engine","ejs");
app.set("views","./views");
app.get("/",function  (req,res){
    res.render("index");
});