var express = require("express");
var request = require("request");
var app = express();

app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

app.get("/", function(req, res) {
  var url =
    "https://phantombuster.s3.amazonaws.com/MIC1FIUi3Xg/iDYgRtN28v6K9DujDPdvCQ/result.json";
  request(url, function(error, response, body) {
    if (!error && response.statusCode === 200) {
      var data = JSON.parse(body);
      res.render("home", { _data: data });
    }
  });
});

app.get("/iztagram", function(req, res) {
  res.redirect("/");
});

app.get("*", function(req, res) {
  res.render("404");
});

app.disable("x-powered-by");

app.listen(process.env.PORT, process.env.IP, () => {
  console.log(`Server is running at ${process.env.IP}:${process.env.PORT}`);
});
