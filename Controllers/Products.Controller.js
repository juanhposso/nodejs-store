const Services = require('../services/products.services');

const servicesProduct = new Services();

// * GET
const getInfo = async (req, res, next) => {
	try {
		const limit = req.query.size ? req.query.size : 10;

		const arrayInfo = await servicesProduct.obtenerInfo(limit);

		res.json(arrayInfo);
	} catch (error) {
		next(error);
	}
};

// * GET
const filterById = async (req, res, next) => {
	const { idProduct } = req.params;

	const itemFiltered = await servicesProduct.findById(idProduct);

	itemFiltered ? res.status(200).json(itemFiltered) : next(error);
};

// * POST
const createItem = async (req, res) => {
	try {
		const body = req.body;
		const newProduct = await servicesProduct.createNewItem(body);

		res.status(201).json({
			message: 'created Item',
			data: body,
			newProduct,
		});
	} catch (error) {
		next(error);
	}
};

// * PATCH
const updatedItem = async (req, res) => {
	const { idProduct } = req.params;
	const body = req.body;

	const itemFiltered = await servicesProduct.itemUpdated(idProduct, body);

	res.json({
		message: 'Updated Item',
		dataChanging: body,
		FromItem: idProduct,
		newItem: itemFiltered,
	});
};

// * DELETE
const itemDelete = async (req, res) => {
	const { idProduct } = req.params;

	const item = await servicesProduct.itemDeleted(idProduct);

	res.json({
		message: 'Item deleted',
		deleteID: item,
	});
};

// ! In order to get new item to test POST
const createNewItemTestingPost = (req, res) => {
	const getInfo = servicesProduct.createNewItemPostForTesting();

	res.json(getInfo);
};

module.exports = {
	getInfo,
	filterById,
	createItem,
	updatedItem,
	itemDelete,
	createNewItemTestingPost,
};
