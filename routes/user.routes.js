const { Route } = require('express');
const express = require('express');
const Router = express.Router();
const UserController = require('../Controllers/User.Controller');
const validatorHandler = require('../middlewares/validator.handler');
const {
	updateUserSchema,
	createUserSchema,
	getUserSchema,
} = require('../model/schema/user.schema');

// ROOT USER
Router.get('/', UserController.getUser);

// GET BY ID
Router.get(
	'/:id',
	validatorHandler(getUserSchema, 'params'),
	UserController.getById
);

// POST
Router.post(
	'/',
	validatorHandler(createUserSchema, 'body'),
	UserController.createNewUser
);

// PATCH
Router.patch(
	'/:id',
	validatorHandler(getUserSchema, 'params'),
	validatorHandler(updateUserSchema, 'body'),
	UserController.updateItem
);

Router.delete(
	'/:id',
	validatorHandler(getUserSchema, 'params'),
	UserController.deleteItem
);

module.exports = Router;
