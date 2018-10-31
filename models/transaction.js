'use strict';
module.exports = (sequelize, DataTypes) => {
    const Transaction = sequelize.define('Transaction', {
        quantity_ordered: DataTypes.INTEGER
    }, {timestamps: false});
    Transaction.associate = function (models) {
        // associations can be defined here
    };
    return Transaction;
};