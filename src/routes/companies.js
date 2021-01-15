import express from 'express';
const router = express.Router();

router.get('/', (req, res) => {
    res.send({
        message: 'rota companhias'
    });
});

export default router;