const express = require('express');
const cors = require('cors');

const App = express();
const PORT = 3000;

const routerAPI = require('./routes');

const {
	logErrors,
	errorHandler,
	boomErrorHandler,
} = require('./middlewares/error.handlers');

// * Escuchar y activar el server
App.listen(PORT);

App.use(express.json());

// * Setting CORS
const whitelist = ['http://localhost:8080', 'https://myapp.co'];
const options = {
	origin: (origin, callback) => {
		if (whitelist.includes(origin) || !origin) {
			callback(null, true);
		} else {
			callback(new Error('no permitido'));
		}
	},
};

App.use(cors(options));

// * Redireccion en caso de solicitar el root del server
App.get('/', (req, res) => {
	res.redirect('/api/v1/products');
});

App.get('/api/', (req, res) => {
	res.redirect('/api/v1/products');
});

App.get('/api/v1', (req, res) => {
	res.redirect('/api/v1/products');
});

routerAPI(App);

// ! HANDLER-ERRORS
App.use(logErrors);
App.use(boomErrorHandler);
App.use(errorHandler);
