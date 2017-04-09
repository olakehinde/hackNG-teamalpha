//import libraries
var express 	= require('express'), //require express library
	morgan		= require('morgan'), //require morgan library
	bodyParser 	= require('body-parser'); //require body-parser library
	app 		= express();
	db 			= require('./db.js');
	employeeRouter 		= require('./employee/employee-router.js'); //import the router library

	//import the middleware (app level middlewares)
	app.use(bodyParser.urlencoded({extended: false})); //middleware for form data
	app.use(bodyParser.json());
	app.use(morgan('dev'));

	//serve files from here
	app.use(express.static(__dirname + "/public"));

	//mount the routes...
	app.use('/employee', employeeRouter);

	//error middleware...
	app.use(function(err, req, res, next) {
		console.log(err);
		res.status(500).send(err.message);
	})

	//establish a request listening port for the app
	db.connection.sync({}).then(function() {
		app.listen("3000", function() {
			console.log('server started')
		});
	});