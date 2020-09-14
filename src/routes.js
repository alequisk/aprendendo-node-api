const express = require('express');

const routes = express.Router();

const ProductController = require('./controllers/ProductController');

routes.get('/', (req, res) => {
    /*Product.create({
        title: 'Alex Sousa',
        description: 'Lindao',
        url: 'www.google.com'
    });*/

    return res.send('Nova rota!');
});

routes.get('/products', ProductController.index);
routes.get('/products/:id', ProductController.show);
routes.put('/products/:id', ProductController.update);
routes.delete('/products/:id', ProductController.destroy);
routes.post('/products', ProductController.store)

module.exports = routes;