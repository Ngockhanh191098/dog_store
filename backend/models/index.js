const sequelize = require('../config/db.config.js');
const { Sequelize } = require('sequelize');
var DataTypes = require('sequelize/lib/data-types');

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.User = require('./users.model.js') (sequelize, DataTypes);
db.Dog = require('./dogs.model.js') (sequelize, DataTypes);
db.Cart = require('./carts.model.js') (sequelize, DataTypes);
db.Order = require('./orders.model.js') (sequelize, DataTypes);
db.orderDetail = require('./orderDetails.model.js') (sequelize, DataTypes);


//  Order vs orderDetail: one - to - many
db.Order.hasMany(db.orderDetail, {
    foreignKey: {
        name: 'orderId',
    },
    as: "orderDetails"
});
db.orderDetail.belongsTo(db.Order, {
    foreignKey: {
        name: "orderId",
    },
    as: "order"
});

// Product vs orderDeatail: one-to-many
db.Dog.hasMany(db.orderDetail, {
    foreignKey: {
        name: "dogId",
    },
    as: "orderDetails",
});
db.orderDetail.belongsTo(db.Dog, {
    foreignKey: {
        name: "dogId",
    },
    as: "dog"
});

// User vs Cart: one - to - many
db.User.hasMany(db.Cart, {
    foreignKey: {
        name: "userId",
    },
    as: "carts"
});
db.Cart.belongsTo(db.User, {
    foreignKey: {
        name: "userId",
    },
    as: "user"
});

// product vs cart: one-to-many
db.Dog.hasMany(db.Cart, {
    foreignKey: {
        name: "dogId",
    },
    as: "carts"
});
db.Cart.belongsTo(db.Dog, {
    foreignKey: {
        name: "dogId",
    },
    as: "dog"
});

db.User.sync();
db.Dog.sync();
db.Order.sync();
db.Cart.sync();
db.orderDetail.sync();

module.exports = db;

