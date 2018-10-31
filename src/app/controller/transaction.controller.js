const transactionService = require('../service/transaction.service');

exports.createTransaction = (req, res) => {
    transactionService.createTransaction(req.body.id, req.body.item_id, req.body.customer_id,
        req.body.order_id, req.body.quantity_ordered)
        .then(transaction => {
            res.send(transaction);
        });
};

exports.findAllTransaction = (req, res) => {
    transactionService.findAllTransaction().then(transaction => {
        res.send(transaction);
    });
};

exports.findTransactionById = (req, res) => {
    transactionService.findTransactionById(req.params.id).then(item => {
        res.send(item);
    })
};

exports.updateTransaction = (req, res) => {
    const id = req.params.id;
    transactionService.updateTransaction(req.params.id, req.body.item_name, req.body.unit_cost)
        .then(() => {
            res.status(200).send("updated successfully a transaction with id = " + id);
        });
};

exports.deleteTransaction = (req, res) => {
    const id = req.params.id;
    transactionService.deleteTransaction(id).then(() => {
        res.status(200).send('deleted successfully a transaction with id = ' + id);
    });
};
