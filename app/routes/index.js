var PythonShell = require('python-shell');

var routes = {};

routes.home = function(req, res){
	res.sendfile('./public/main.html');
};

routes.predict = function(req,res){
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
}

module.exports = routes