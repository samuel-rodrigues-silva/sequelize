const express = require('express');
const routes = express.Router();
const productController = require('../controllers/productController')

routes.get('/', productController.showProduct);

routes.post('/addProduct', productController.addProduct);

routes.put('/editProduct/:id', productController.editProduct);

routes.delete('/:id', productController.deleteProduct);


module.exports = routes

