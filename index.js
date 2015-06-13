var express = require('express');
var app = express();
var HydrometersFetcher = require('hydrometers-fetcher');

var hf = HydrometersFetcher();

app.get('/hydrometers', function (req, res) {
  res.json(hf.listSensors());
});

app.get('/hydrometers/:river/:station', function (req, res) {
  var sensorId = (req.params.river + '/' + req.params.station).toLowerCase();
  hf.getSensor(sensorId).then(function (data) {
    res.json(data);
  });
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log('app listening at http://%s:%s', host, port);

});