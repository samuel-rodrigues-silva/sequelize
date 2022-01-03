const Product = require('../models/product')

const showProduct = (req, res) => {


    Product.findAll().then((response) => {
        res.send(JSON.stringify(response));
    }).catch((err) => {
        res.status(400).send({})
    });
}

const addProduct = (req, res) => {
    const { title, price, imageUrl, description } = req.body
    Product.create({
        title: title,
        price: price,
        imageUrl: imageUrl,
        description: description
    }).then((response) => {
        res.send(JSON.stringify(response));
    }).catch((err) => {
        res.status(400).send({})
    });
}

const editProduct = (req, res) => {
    const { id } = req.params;
    const { title, price, imageUrl, description } = req.body;

    Product.findByPk(id)
        .then((product) => {
            product.title = title;
            product.price = price;
            product.imageUrl = imageUrl;
            product.description = description;
            return product.save();
        }).then((response) => {
            res.send(JSON.stringify(response));
        }).catch((err) => {
            res.status(400).send(err)
        });

}

const deleteProduct = (req, res) => {
    const { id } = req.params;
    Product.findByPk(id).then((product) => {
        return product.destroy();
    }).then((response) => {
        res.send('Product deleted');
    }).catch((err) => {
        res.status(400).send(err)
    })


}

module.exports = { showProduct, addProduct, editProduct, deleteProduct }
