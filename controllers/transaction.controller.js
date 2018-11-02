const transactionService = require('../service/transaction.service');
const models = require('../models');
const transactionRepository = require('../repository/TransactionsRepository');

exports.createTransaction = (req, res) => {
    models.Transaction.create({
        id: req.body.id, item_id: req.body.item_id,
        order_id: req.body.order_id, quantity_ordered: req.body.quantity_ordered
    })
        .then(transaction => {
            res.send(transaction);
        }).catch((err) => {
            res.send(err)
        })
};

exports.findAllTransaction = (req, res) => {
    transactionService.getAllTransaction()
        .then(transaction => {
            res.send(transaction);
        }).catch((err) => {
            res.send(err);
        })
};

exports.findTransactionById = (req, res) => {
    models.Transaction.findById(req.params.id)
        .then(item => {
            res.send(item);
        }).catch((err) => {
            res.send(err);
        })
};

exports.updateTransaction = (req, res) => {
    const id = req.params.id;
    models.Transaction.update({ quantity_ordered: req.body.quantity_ordered, item_id: req.body.item_id, order_id: req.body.order_id },
        { where: { id: id } })
        .then(() => {
            res.status(200).send("updated successfully transaction with id = " + id);
        })
        .catch((err) => {
            res.send(err)
        })
};

exports.deleteTransaction = (req, res) => {
    const id = req.params.id;
    models.Transaction.destroy({ where: { id: id } }).then(() => {
        res.status(200).send('deleted successfully a transaction with id = ' + id);
    });
};

module.exports.getFrequentCustomer = (req, res) => {
    transactionRepository.getFrequentCustomer()
        .then((customer) => { res.send(customer) })
        .catch((err) => res.send("error occurred"));
};
