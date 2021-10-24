const express = require('express');
const App = express();
const PORT = 3000;
const routerAPI = require('./routes');

// * Escuchar y activar el server
App.listen(PORT);

App.use(express.json());

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
