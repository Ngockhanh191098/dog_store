const db = require('../models');
const UserModel = db.User;

const verifySignUp = async (req, res ,next) => {
    const findUser = await UserModel.findOne({
        where: { username: req.body.username },
    });

    if (findUser) {
        return res.status(400).json({message: "Username is already exist"});
    };

    const findEmail = await UserModel.findOne({
        where: { email: req.body.email },
    });

    if (findEmail) {
        return res.status(400).json({message: "Email is already exist"});
    };

    next();
};

module.exports = verifySignUp;