var express =require("express");  //lib-----Node Module
var app=express();  // will create app object from express package
app.all('*',function(req, res){
    res.sendFile(__dirname+"/index.html");
});
var server=app.listen(8081);
console.log("Server is running on port 8081");
