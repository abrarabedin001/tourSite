
const mysql = require('mysql');

var connection = mysql.createConnection({
	host : 'localhost',
	database : 'test71',
	user : 'root',
	password : '',
  timezone: 'Z'
});

connection.connect(function(error){
	if(error)
	{
		throw error;
	}
	else
	{
		console.log('MySQL Database is connected Successfully');
	}
});

module.exports = connection;

