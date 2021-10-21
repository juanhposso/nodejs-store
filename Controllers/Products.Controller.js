const API = require('../model/info');

// * GET
const getInfo = (req, res) => {
	const limit = req.query.size == 0 ? 10 : req.query.size || 10;

	const arrayInfo = API.infoJSON.slice(0, limit);

	res.json(arrayInfo);
};

// * GET
const filterById = (req, res) => {
	const { idProduct } = req.params;

	const itemFiltered = API.infoJSON.find((item) => {
		return item.id == idProduct || item.iduii == idProduct;
	});

	itemFiltered
		? res.status(200).json(itemFiltered)
		: res.redirect('/api/v1/404');
};

// * POST
const createItem = (req, res) => {
	const body = req.body;
	API.infoJSON.push(body);

	res.status(201).json({
		message: 'created Item',
		data: body,
	});
};

// * PATCH
const updatedItem = (req, res) => {
	const { idProduct } = req.params;
	const body = req.body;

	const itemFiltered = API.infoJSON.find((item) => {
		return item.id == idProduct || item.iduii == idProduct;
	});

	if (itemFiltered) {
		for (const key in itemFiltered) {
			if (itemFiltered.hasOwnProperty.call(body, key)) {
				itemFiltered[key] = body[key];
			}
		}

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

	res.json({
		message: 'Delete item',
		deleteID: idProduct,
	});
};

// ! In order to get new item to test POST
const createNewItemTestingPost = (req, res) => {
	const getInfo = API.createNewItemPostTesting();

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
