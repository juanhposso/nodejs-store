const API = require('../model/info');

class productServices {
	constructor() {
		this.products = API.infoJSON;
		this.testingItem;
	}

	obtenerInfo(limit) {
		return this.products.slice(0, limit);
	}

	findById(idProduct) {
		return API.infoJSON.find((item) => {
			return item.id == idProduct || item.iduii == idProduct;
		});
	}

	createNewItem(item) {
		const newItem = {
			iduii: API.newitemID(),
			id: API.infoJSON.length + 1,
			...item,
		};
		return API.infoJSON.push(newItem);
	}

	itemUpdated(idProduct, body) {
		const itemFiltered = API.infoJSON.find((item) => {
			return item.id == idProduct || item.iduii == idProduct;
		});

		if (itemFiltered) {
			for (const key in itemFiltered) {
				if (itemFiltered.hasOwnProperty.call(body, key)) {
					itemFiltered[key] = body[key];
				}
			}

			return itemFiltered;
		}

		return false;
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

		API.infoJSON.splice(index, 1);

		return index;
	}
}

module.exports = productServices;
