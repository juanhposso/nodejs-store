const API = require('../model/info');

const getInfo = (req, res) => {
	const limit = req.query.size == 0 ? 10 : req.query.size || 10;

	const arrayInfo = API.slice(0, limit);
	res.json(arrayInfo);
};

const filterById = (req, res) => {
	const idItem = Number(req.params.idProduct);

	const itemFiltered = API.find((item) => {
		return item.id == idItem;
	});

	itemFiltered ? res.json(itemFiltered) : res.redirect('/404');
};

module.exports = {
	getInfo,
	filterById,
};
