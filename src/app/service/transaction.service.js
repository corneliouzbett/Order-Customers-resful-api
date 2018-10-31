const transactionModel = require('../repository/model/transaction.model');

exports.findAllTransaction = () => {
    return transactionModel.findAll();
};

exports.findTransactionById = (id) => {
    return transactionModel.findById({where: {id: id}});
};

exports.deleteTransaction = (id) => {
    return transactionModel.destroy({where: {id: id}});
};
