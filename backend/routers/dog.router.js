const express = require('express');
const dogRouter = express.Router();
const { verifyToken, isAdmin, isMember, isAdminOrMember } = require('../middlewares/authJwt');
const {addNewDog, getDogsPagination, deleteDog, updateDog} = require('../controllers/dog.controller');

dogRouter.get('/', getDogsPagination);

dogRouter.post('/', verifyToken, isAdmin, addNewDog);

dogRouter.delete('/:id', verifyToken, isAdmin, deleteDog);

dogRouter.put('/:id', verifyToken, isAdmin, updateDog)

module.exports = dogRouter;