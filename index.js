const express = require('express');
const App = express();
const apiV1 = '/api/v1';
const PORT = 3000;

App.listen(PORT);

// Products Router
const productsRouter = require('./routes/Products');

//Categories Router
const categoriesRouter = require('./routes/Categories');

// Error404 Router
const error404 = require('./routes/Error404');

App.get('/', (req, res) => {
	res.redirect(`${apiV1}/products`);
});

App.use(`${apiV1}/products`, productsRouter);
App.use(`${apiV1}/categories`, categoriesRouter);
App.use('/404', error404);
