const boom = require('@hapi/boom');

const getConnection = require('../libs/postgres');

class UserService {
	constructor() {}

	async create(data) {
		return data;
	}

	async find() {
		const cliente = await getConnection();
		const rta = await cliente.query('SELECT * FROM task');

		return rta;
	}

	async findOne(id) {
		return { id };
	}

	async update(id, changes) {
		return {
			id,
			changes,
		};
	}

	async delete(id) {
		return { id };
	}
}

module.exports = UserService;
