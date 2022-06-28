require('dotenv').config()
const md5 = require('md5');
const jwt = require('jsonwebtoken');
const db = require('../models');
const UserModel = db.User;

exports.signup = async (req, res) => {
    const {
        username,
        email,
        phone,
        password,
        role
    } = req.body;

    try {
        const createData = {
            username: username,
            email: email,
            phone: phone,
            password: md5(password),
            role: role,
        };

        // create new user
        await UserModel.create(createData);
        
        delete createData.password;
        
        return res.status(201).json(createData);
    } catch (error) {
        return res.status(500).json({message: "Server is getting error when creating user!"});
    }
};

exports.signin = async (req, res) => {
    const { username, password } = req.body;

    // check username in database
    const foundUser = await UserModel.findOne({
        where: { username: username }
    });

    if (!foundUser) {
        return res.status(404).json({message: "invalid username"});
    }

    if (md5(password) !== foundUser.password) {
        return res.status(404).json({message: "invalid password"});
    }

    // generate token
    const token = jwt.sign({ id:foundUser.id }, process.env.SECRET_KEY, {
        expiresIn: 86400,
    });

    return res.status(200).json({
        id: foundUser.id,
        username: foundUser.username,
        email: foundUser.email,
        role: foundUser.role,
        accessToken: token,
    });
};