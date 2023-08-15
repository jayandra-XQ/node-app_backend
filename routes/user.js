const express = require('express');
const userController = require('../controller/user');


const router = express.Router();

// We can chain it into server level

router
    .post('/products',userController.createUser)
    .get('/products', userController .getAllUsers)
    .get('/products/:id', userController .getUser)
    .put('/products/:id', userController .replaceUser)
    .patch('/products/:id', userController .updateUser)
    .delete('/products/:id', userController .deleteUser)

module.exports = router;