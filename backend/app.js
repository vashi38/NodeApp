var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.get('/',function(req, res){
    res.send('Hello World');
})

app.post('/process_post', urlencodedParser, function (req, res) {
   // Prepare output in JSON format
  //  response = {
  //     first_name: req.query.first_name,
  //     last_name:req.query.last_name
  //  };
   console.log(req.data);
   res.send(req.data);
});

app.listen(3000, function(){
  console.log('Example app listening on port 3000');
})
