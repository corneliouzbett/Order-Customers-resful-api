const  models = require('../models');

module.exports.getAllItems = () =>{
  return models.Item.findAll();
};
