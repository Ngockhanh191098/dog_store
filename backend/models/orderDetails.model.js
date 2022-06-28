module.exports = (sequelize, DataTypes) => {
    const orderDetail = sequelize.define(
        "orderDetail",
        {
            id:{
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
                allowNull: false
            },
            quantity: {
                type: DataTypes.INTEGER,
                allowNull: false,
            }
        },
        {
            timestamp: true,
        }
    );

    return orderDetail;
}