const express = require('express');
const Router = express.Router();
const ProductsController = require('../Controllers/Products.Controller');

Router.get('/', ProductsController.getInfo);

Router.get('/:idProduct', ProductsController.filterById);

module.exports = Router;
