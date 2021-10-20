const express = require('express');
const Router = express.Router();
const ProductsController = require('../Controllers/Products.Controller');

Router.get('/', ProductsController.getInfo);

Router.get('/:idProduct', ProductsController.filterById);

Router.post('/', (req, res) => {
	const body = req.body;
	res.json({
		message: 'buena ñiño',
		data: body,
	});
});

module.exports = Router;
