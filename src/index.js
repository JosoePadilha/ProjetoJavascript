import app from './server.js';

import companiesRouter from './routes/companies.js';

app.use('/companies', companiesRouter);


app.use('/', (req, res) => {
    res.send({
        message: 'rota principal'
    });
});



// app.use((request, response, next) => {
//     const erro = new Error('Não encontrado');
//     erro.status = 404;
//     next(erro);
// });

// app.use((error, request, response, next) => { 
//     response.status(error.status || 500);
//     return response.send({
//         erro:{
//             mensagem:  error.message
//         }
//     });
// });