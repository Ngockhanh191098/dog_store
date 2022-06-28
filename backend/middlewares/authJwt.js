require('dotenv').config()
const jwt = require('jsonwebtoken');
const db = require('../models');
const UserModel = db.User;

const verifyToken = async (req, res, next) => {
    let token = req.headers["x-access-token"];
    // return 403 error if token not found
    if (!token) {
        return res.status(403).json({message: "Not token provided!"});
    }

    // verify token
    await jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
        if (err) {
            return res.status(401).json({message: "Unauthorized!"});
        }
        req.userId = decoded.id;
        next();
    });
};

// verify if it is admin permission
const isAdmin = async (req, res, next) => {
    const user = await UserModel.findByPk(req.userId);

    if (user.role !== "admin") {
        return res.status(403).json({message: "require Admin Role"});
    }
    next();

}

// verify if it is member permission
const isMember = async (req, res, next) => {
    const user = await UserModel.findByPk(req.userId);

    if (user.role !== "member") {
        return res.status(403).json({message: "require member role"});
    }
    next();
};

const isAdminOrMember = async (req, res, next) => {
    const user = await UserModel.findByPk(req.userId);
    const role = user.role;

    if (role === "admin" || role === "member") {
        next();
        return;
    }

    return res.status(403).json({message: "require member or admin role"});
};

const authJwt = {
    verifyToken,
    isAdmin,
    isMember,
    isAdminOrMember,
};

module.exports = authJwt;