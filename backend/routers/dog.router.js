const express = require('express');
const dogRouter = express.Router();
const { verifyToken, isAdmin, isMember, isAdminOrMember } = require('../middlewares/authJwt');
const {addNewDog, getDogsPagination, deleteDog} = require('../controllers/dog.controller');

dogRouter.get('/', getDogsPagination);

dogRouter.post('/', verifyToken, isAdmin, addNewDog);

dogRouter.delete('/:id', verifyToken, isAdmin, deleteDog);

module.exports = dogRouter;