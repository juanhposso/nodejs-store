const API = require('../model/info');
const boom = require('@hapi/boom');

class productServices {
	constructor() {
		this.products = API.infoJSON;
		this.testingItem;
	}

	obtenerInfo(limit) {
		return new Promise((resolve, reject) => {
			try {
				setTimeout(() => {
					resolve(this.products.slice(0, limit));
				}, 500);
			} catch (error) {
				reject(boom.badRequest(error));
			}
		});
	}

	findById(idProduct) {
		const itemFiltered = this.products.find((item) => {
			return item.id == idProduct || item.iduii == idProduct;
		});

		if (itemFiltered) {
			return itemFiltered;
		}

		throw boom.notFound('product not found');
	}

	createNewItem(item) {
		const newItem = {
			...API.newitemID(),
			id: API.infoJSON.length + 1,
			...item,
		};
		return this.products.push(newItem);
	}

	itemUpdated(idProduct, body) {
		const index = API.infoJSON.findIndex((item) => {
			return item.id == idProduct || item.iduii == idProduct;
		});

		if (index === -1) {
			throw boom.notFound('Item not found');
		}

		const product = this.products[index];

		this.products[index] = {
			...product,
			...body,
		};

		return this.products[index];
	}

	createNewItemPostForTesting() {
		this.testingItem = API.createNewItemPostTesting();
		return this.testingItem;
	}

	itemDeleted(idProduct) {
		const index = API.infoJSON.findIndex((item) => {
			if (item.id == idProduct || item.iduii == idProduct) {
				return item;
			}
		});

		if (index === -1) {
			throw new Error('Item not found');
		}

		this.products.splice(index, 1);

		return { idProduct };
	}
}

module.exports = productServices;
