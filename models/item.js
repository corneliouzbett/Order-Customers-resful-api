'use strict';
module.exports = (sequelize, DataTypes) => {
  const Item = sequelize.define('Item', {
    item_name: DataTypes.STRING,
    unit_cost: DataTypes.DOUBLE
  }, {timestamps: false});
  Item.associate = function(models) {
    Item.hasOne(models.Transaction,{foreignKey: 'item_id'});
  };
  return Item;
};