var router = require('express').Router(),
	employeeRoute = require('./employee/employee-router.js');

	//mount api route...
	router.use('/employee', employeeRoute);

	module.exports = router;

