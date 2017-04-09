var Sequelize 	= require('sequelize');

var sequelize = new Sequelize(undefined, undefined, undefined, {
	dialect: 'sqlite',
	storage: __dirname + '/dbstore/storage.sqlite'
});

var db = {};
db.connection = sequelize;
db.employee = sequelize.import(__dirname + '/employee/employee-model.js'); //import the model

module.exports = db;


