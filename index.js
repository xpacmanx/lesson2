var express = require('express');
var app = express();

app.get('/', function (req, res) {
  var result = 0;
  if (undefined != req.query.a && undefined != req.query.b) {
        result = parseInt(req.query.a) + parseInt(req.query.b);
  }
  res.send(200,result);
});

app.listen(3000);
