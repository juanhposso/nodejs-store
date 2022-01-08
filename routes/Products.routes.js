const express = require('express');
const Router = express.Router();
const ProductsController = require('../Controllers/Products.Controller');
const validatorHandler = require('../middlewares/validator.handler');
const {
	createProductSchema,
	updateProductSchema,
	getProductSchema,
} = require('../model/schema/product.schema');

/* Router.get('/item', ProductsController.createNewItemTestingPost); */

// ROOT
Router.get('/', ProductsController.getInfo);

// FILTER BY ID
Router.get(
	'/:idProduct',
	validatorHandler(getProductSchema, 'params'),
	ProductsController.filterById
);

// POST
Router.post(
	'/',
	validatorHandler(createProductSchema, 'body'),
	ProductsController.createItem
);

// PATCH
Router.patch(
	'/:idProduct',
	validatorHandler(getProductSchema, 'params'),
	validatorHandler(updateProductSchema, 'body'),
	ProductsController.updatedItem
);

// DELETE
Router.delete(
	'/:idProduct',
	validatorHandler(getProductSchema, 'params'),
	ProductsController.itemDelete
);

module.exports = Router;
