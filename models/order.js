'use strict';
module.exports = (sequelize, DataTypes) => {
    const Order = sequelize.define('Order', {
        order_date: DataTypes.DATEONLY
    }, {timestamps: false});
    Order.associate = function (models) {
        Order.hasOne(models.Transaction, {foreignKey: 'order_id'});
    };
    return Order;
};