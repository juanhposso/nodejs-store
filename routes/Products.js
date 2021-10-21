const express = require('express');
const Router = express.Router();
const ProductsController = require('../Controllers/Products.Controller');

/* Router.get('/item', ProductsController.createNewItemTestingPost); */

// ROOT
Router.get('/', ProductsController.getInfo);

// FILTER BY ID
Router.get('/:idProduct', ProductsController.filterById);

// POST
Router.post('/', ProductsController.createItem);

// PATCH
Router.patch('/:idProduct', ProductsController.updatedItem);

// DELETE
Router.delete('/:idProduct', ProductsController.itemDelete);

module.exports = Router;
