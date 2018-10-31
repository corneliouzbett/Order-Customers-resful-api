'use strict';
module.exports = (sequelize, DataTypes) => {
    const Customer = sequelize.define('Customer', {
        customer_name: DataTypes.STRING,
        phone_number: DataTypes.INTEGER
    }, {timestamps: false});
    Customer.associate = function (models) {
        Customer.hasMany(models.Order, {foreignKey: 'customer_id'})
    };
    return Customer;
};