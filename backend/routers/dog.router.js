const express = require('express');
const dogRouter = express.Router();
const { verifyToken, isAdmin, isMember, isAdminOrMember } = require('../middlewares/authJwt');
const {addNewDog, getDogs} = require('../controllers/dog.controller');

dogRouter.get('/', getDogs);

dogRouter.post('/', verifyToken, isAdmin, addNewDog);

module.exports = dogRouter;