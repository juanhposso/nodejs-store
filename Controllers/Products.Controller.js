const Services = require('../services/products.services');

const servicesProduct = new Services();

// * GET
const getInfo = (req, res) => {
	const limit = req.query.size == 0 ? 10 : req.query.size || 10;

	const arrayInfo = servicesProduct.obtenerInfo(limit);

	res.json(arrayInfo);
};

// * GET
const filterById = (req, res) => {
	const { idProduct } = req.params;

	const itemFiltered = servicesProduct.findById(idProduct);

	itemFiltered
		? res.status(200).json(itemFiltered)
		: res.redirect('/api/v1/404');
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

	if (itemFiltered) {
		res.json({
			message: 'Updated Item',
			datachange: body,
			newItem: itemFiltered,
		});
	} else {
		res.json({
			message: 'Item you are choosing isnt available',
		});
	}
};

// * DELETE
const itemDelete = (req, res) => {
	const { idProduct } = req.params;

	const item = servicesProduct.itemDeleted(idProduct);

	if (item != -1) {
		res.json({
			message: 'Delete item',
			deleteID: idProduct,
		});
	} else {
		res.json({
			message: 'cant delete item',
			deleteID: idProduct,
		});
	}
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
