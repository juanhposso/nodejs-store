const API = require('../model/info');

const filterByCategory = (req, res) => {
	const category = req.query.category;

	if (!category) {
		res.json(API.slice(200, 300));
	} else {
		const categoryAlreadyFiltered = API.filter((item) => {
			return item.category.toLowerCase() === category.toLowerCase();
		});

		res.json(categoryAlreadyFiltered);
	}
};

module.exports = {
	filterByCategory,
};
