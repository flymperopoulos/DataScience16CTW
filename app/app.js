var express = require('express');
var session = require('express-session');
var path = require('path');
var logger = require('morgan');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');

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
	res.json({prediction: 500})
})

var PORT = process.env.PORT || 3000;

app.listen(PORT, function() {
  console.log("Application running on port:", PORT);
});
