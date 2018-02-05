var express = require('express');
var app = express();
const bodyParser = require("body-parser");

app.use(
	bodyParser.urlencoded({
		extended: true
	})
);
app.use(bodyParser.json());

app.get('/', function (req, res) {
   var speech = "Same old Hello world";
		return res.json({
			speech: speech,
			displayText: speech
		});
})
app.post('/webhook', function (req, res) {
	var speech = "default text for now";
		console.log(req.body);
		return res.json({
			speech: speech,
			displayText: speech
		});
})
app.post('/', function (req, res) {
   res.send('Hello World post response');
})


var server = app.listen(3000, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
})