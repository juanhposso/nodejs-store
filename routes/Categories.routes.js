const express = require('express');
const Router = express.Router();
const categoryController = require('../Controllers/Categories.Controller');

Router.get('/', categoryController.filterByCategory);

module.exports = Router;
