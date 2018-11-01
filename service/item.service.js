const models = require('../models');

module.exports.getAllItems = () => {
    return models.Item.findAll();
};
module.exports.getItemById = (id) => {
    return models.Item.findByPk(id);
};
