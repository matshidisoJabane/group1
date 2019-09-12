var mysql = require('mysql');
var express = require('express');
var session = require('express-session');
const router = express.Router();
const bodyParser = require('body-parser');
const mysqlConnection = require("../connection");

router.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true
}));
router.use(bodyParser.urlencoded({extended : true}));
router.use(bodyParser.json());

router.post('/login', function(request, response) {
	var user =request.body.username;
	var user_pass = request.body.password;
	if ( user && user_pass) {
		mysqlConnection.query('SELECT * FROM login WHERE username = ? AND password = ?', [user , user_pass], function(error, results, fields) {
			if (results.length > 0) {
				request.session.loggedin = true;
				request.session. user =  user;
				//response.redirect('/route/artisan');
				response.send(' successfully logged in');
			} else {
				response.send('Incorrect  user_id and/or user_pass!');
				console.log('incorrect pass or username');
			}			
			response.end();
		});
	} else {
		response.send('Please enter  user_id and user_pass!');
		console.log('enter pass and username');
		response.end();
	}
});
module.exports = router;