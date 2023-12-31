const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json(
        {
            message: "Handling get methods"
        });
});


router.post('/', (req, res, next) => {
    const product = {
        name : req.body.name,
        price: req.body.price
    }
    res.status(200).json(
        {
            message: "Handling post methods",
            created : product
        });
});

router.get('/:productId', (req, res, next) => {

    const id = req.params.productId;
    if (id === 'special') {
        res.status(200).json(
            {
                message: "Special ID added",
                id: id

            });
    } else {
        res.status(200).json(
            {
                message: "Normal added",

            });
    }

});

router.patch('/:productId', (req, res, next) => {
    res.status(200).json(
        {
            message: "UPDATED ID"
        });
});

router.delete('/:productId', (req, res, next) => {
    res.status(200).json(
        {
            message: "DELETED ID"
        });
});



module.exports = router;