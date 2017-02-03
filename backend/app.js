var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/',function(req, res){
    res.send('Hello World');
})

app.post('/process_post', urlencodedParser, function (req, res) {
   // Prepare output in JSON format
  //  response = {
  //     first_name: req.config.data.first_name,
  //     last_name:req.config.data.last_name
  //  };
   console.log(req.query.fname);
   res.send(req.query.fname);
});

app.listen(3000, function(){
  console.log('Example app listening on port 3000');
})
