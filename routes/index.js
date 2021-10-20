const express = require('express');

// Products Router
const productsRouter = require('./Products');

//Categories Router
const categoriesRouter = require('./Categories');

// Error404 Router
const error404 = require('./Error404');

function routerAPI(App) {
	//const apiV1 = '/api/v1';
	const Router = express.Router();

	App.use('/api/v1', Router);

	Router.use('/products', productsRouter);
	Router.use('/categories', categoriesRouter);
	Router.use('/404', error404);
}

module.exports = routerAPI;
