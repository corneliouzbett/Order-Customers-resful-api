const itemModel = require('../repository/model/item.model');

exports.getAllItems = () => {
    return itemModel.findAll();
};

exports.getItemById = (id) => {
    return itemModel.findById({where: {id: id}});
};

exports.deleteItem = (id) => {
    return itemModel.destroy({where: {id: id}});
};
