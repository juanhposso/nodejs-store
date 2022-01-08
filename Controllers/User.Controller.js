const Services = require('../services/user.services');

const servicesUser = new Services();

const getUser = async (req, res, next) => {
	try {
		const categories = await servicesUser.find();
		res.json(categories);
	} catch (error) {
		next(error);
	}
};

const getById = async (req, res, next) => {
	try {
		const { id } = req.params;
		const category = await servicesUser.findOne(id);
		res.json(category);
	} catch (error) {
		next(error);
	}
};

const createNewUser = async (req, res, next) => {
	try {
		const body = req.body;
		const newCategory = await servicesUser.create(body);
		res.status(201).json(newCategory);
	} catch (error) {
		next(error);
	}
};

const updateItem = async (req, res, next) => {
	try {
		const { id } = req.params;
		const body = req.body;
		const category = await servicesUser.update(id, body);
		res.json(category);
	} catch (error) {
		next(error);
	}
};

const deleteItem = async (req, res, next) => {
	try {
		const { id } = req.params;
		await servicesUser.delete(id);
		res.status(201).json({ id });
	} catch (error) {
		next(error);
	}
};

module.exports = { getUser, getById, createNewUser, updateItem, deleteItem };
