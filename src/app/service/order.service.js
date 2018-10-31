const orderModel = require('../repository/model/order.model');

exports.getAllOrders = () => {
    return orderModel.findAll();
};

exports.getOrderById = (id) => {
    return orderModel.findById({where: {id: id}});
};

exports.deleteOrder  = (id) => {
    return orderModel.destory({where: {id: id}});
};
