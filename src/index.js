import app from './server.js';

import productsRouter from './routes/products.js';

app.use('/', (request, response) => {
    response.send({
        message: 'rota principal'
    });
});

app.use('/products', productsRouter);