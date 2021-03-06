var express = require("express");
var app = express();

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

// ROUTES
app.get("/", function(req, res){
  res.render("home")
})


app.listen(process.env.PORT || 3000, function(req, res){
  console.log("SERVER RUNNING")
})
