const Joi = require('joi');

const iduii = Joi.string().uuid();
const id = Joi.number().integer().max(510);
const name = Joi.string().min(3).max(15);
const price = Joi.number().integer().min(10);
const image = Joi.string().uri();

const createProductSchema = Joi.object({
	name: name.required(),
	price: price.required(),
	image: image.required(),
});

const updateProductSchema = Joi.object({
	name: name,
	price: price,
	image: image,
});

// * For testing purpose we are validating with ID (regular number) on production we need to change it FROM idProduct: id TO idProduct: iduii

const getProductSchema = Joi.object({
	idProduct: id.required(),
});

module.exports = { createProductSchema, updateProductSchema, getProductSchema };
