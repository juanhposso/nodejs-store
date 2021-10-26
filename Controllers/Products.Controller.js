const Services = require('../services/products.services');

const servicesProduct = new Services();

// * GET
const getInfo = async (req, res, next) => {
	try {
		const limit = req.query.size <= 0 ? 10 : req.query.size || 10;

		const arrayInfo = await servicesProduct.obtenerInfo(limit);

		res.json(arrayInfo);
	} catch (error) {
		next(error);
	}
};

// * GET
const filterById = (req, res, next) => {
	const { idProduct } = req.params;

	const itemFiltered = servicesProduct.findById(idProduct);

	itemFiltered ? res.status(200).json(itemFiltered) : next(error);
};

// * POST
const createItem = (req, res) => {
	const body = req.body;
	servicesProduct.createNewItem(body);

	res.status(201).json({
		message: 'created Item',
		data: body,
	});
};

// * PATCH
const updatedItem = (req, res) => {
	const { idProduct } = req.params;
	const body = req.body;

	const itemFiltered = servicesProduct.itemUpdated(idProduct, body);

	res.json({
		message: 'Updated Item',
		dataChanging: body,
		FromItem: idProduct,
		newItem: itemFiltered,
	});
};

// * DELETE
const itemDelete = (req, res) => {
	const { idProduct } = req.params;

	const item = servicesProduct.itemDeleted(idProduct);

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
