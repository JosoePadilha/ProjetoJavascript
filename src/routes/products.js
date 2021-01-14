import express from 'express';
const router = express.Router();

router.get('/', (request, response) => {
    response.send({
        message: 'rota products'
    });
});

export default router;