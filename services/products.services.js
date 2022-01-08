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
		return new Promise((resolve, reject) => {
			try {
				setTimeout(() => {
					const itemFiltered = this.products.find((item) => {
						return item.id == idProduct || item.iduii == idProduct;
					});

					if (itemFiltered) {
						resolve(itemFiltered);
					}
				}, 500);
			} catch (error) {
				reject(boom.notFound('product not found'));
			}
		});
	}

	createNewItem(item) {
		return new Promise((resolve, reject) => {
			try {
				const newItem = {
					...API.newitemID(),
					id: API.infoJSON.length + 1,
					...item,
				};
				resolve(this.products.push(newItem));
			} catch (error) {
				reject(boom.badData('check data again'));
			}
		});
	}

	itemUpdated(idProduct, body) {
		return new Promise((resolve, reject) => {
			try {
				const index = API.infoJSON.findIndex((item) => {
					return item.id == idProduct || item.iduii == idProduct;
				});

				if (index === -1) {
					throw new Error(boom.notFound('Item not found'));
				}

				const product = this.products[index];

				this.products[index] = {
					...product,
					...body,
				};

				resolve(this.products[index]);
			} catch (error) {
				reject(error);
			}
		});
	}

	createNewItemPostForTesting() {
		this.testingItem = API.createNewItemPostTesting();
		return this.testingItem;
	}

	itemDeleted(idProduct) {
		return new Promise((resolve, reject) => {
			try {
				const index = API.infoJSON.findIndex((item) => {
					if (item.id == idProduct || item.iduii == idProduct) {
						return item;
					}
				});

				if (index === -1) {
					throw new Error('Item not found');
				}

				this.products.splice(index, 1);

				resolve({ idProduct });
			} catch (error) {
				reject(error);
			}
		});
	}
}

module.exports = productServices;
