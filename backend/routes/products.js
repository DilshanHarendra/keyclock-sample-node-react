const express = require('express');
const {keycloak} = require('../keyclockConfig')
// initialize router
const router = express.Router();
const products =[]

router.get('/',keycloak.protect('realm:read_access'), (req, res) => {
    res.status(200).send({data:products})
});
router.get('/:id',keycloak.protect('realm:read_access'), (req, res) => {
    const id= req.params.id
    res.status(200).send({data:products[id]})
});

router.post('/',keycloak.protect('realm:write_access'), (req, res) => {
    const product ={
        ...req.body,
        id: products.length + 1
    }
    products.push(product)
    res.status(200).send({data:product})
});


module.exports = router
