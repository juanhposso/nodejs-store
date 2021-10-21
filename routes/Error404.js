const express = require('express');
const Router = express.Router();

Router.get('/', (req, res) => {
	res.statusCode = 404;
	res.json({ message: 'you are lost dude!!! - ERROR 404' });
});

module.exports = Router;
