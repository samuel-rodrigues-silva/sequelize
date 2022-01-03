const express = require('express');
const sequelize = require('./db');
const Product = require('./models/product')
const User = require('./models/user')
const productRoutes = require('./routes/products.routes')
const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }))
app.use(express.json());

app.use('/products', productRoutes);

Product.belongsTo(User, { constraints: true, onDelete: 'CASCADE' })
User.hasMany(Product);

sequelize.sync()
    .then((response) => {
        console.log(response);
        app.listen(PORT, () => {
            console.log('server running on port: ' + PORT);
        })
    })
    .catch((err) => {
        console.log(`ERROR> ${err}`)
    });

