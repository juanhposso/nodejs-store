const { Client } = require('pg');

async function getConnection() {
	const Cliente = new Client({
		host: 'localhost',
		port: 5432,
		user: 'juanhposso',
		password: 'admin123',
		database: 'my_store',
	});

	await Cliente.connect();
	return Cliente;
}

module.exports = getConnection;
