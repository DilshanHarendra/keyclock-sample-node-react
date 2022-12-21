const express = require('express');

// initialize router
const router = express.Router();
const products =[]

router.get('/', (req, res) => {
    res.status(200).send({data:products})
});
router.get('/:id', (req, res) => {
    const id= req.params.id
    res.status(200).send({data:products[id]})
});

router.post('/', (req, res) => {
    const product ={
        ...req.body,
        id: products.length + 1
    }
    products.push(product)
    res.status(200).send({data:product})
});


module.exports = router
