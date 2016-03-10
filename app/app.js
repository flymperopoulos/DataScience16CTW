var express = require('express');
var session = require('express-session');
var path = require('path');
var logger = require('morgan');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');

var PythonShell = require('python-shell');


var app = express();

// Set up Middleware
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());

app.use(express.static(path.join(__dirname, 'public')));

// GET reqs
app.get("/", function(req, res){
	res.sendfile('./public/index.html');
});

// POST reqs
app.post("/api/predict", function(req,res){
	console.log(req.body);

	var args = [req.body.selectedBed, req.body.selectedRoom, req.body.selectedProperty,
				req.body.neighbourhood, req.body.Beds, req.body.Bathrooms,
				req.body.Accommodates, req.body.Bedrooms]

	var options = {
		args: args
	}

	console.log(options)

	PythonShell.run('utils/predict.py', options, function (err, results) {
		if (err) throw err;
		// results is an array consisting of messages collected during execution 
		console.log('results: %j', results);
		res.json({prediction: results[0]})
	});
})

var PORT = process.env.PORT || 3000;

app.listen(PORT, function() {
  console.log("Application running on port:", PORT);
});
