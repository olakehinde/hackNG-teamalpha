var router = require('express').Router(),
	employeeRoute = require('./employee/employee-router.js');

	//mount route...
	app.use('/employee', employeeRoute);

	module.exports = router;

