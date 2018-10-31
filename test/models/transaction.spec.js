const {expect} = require('chai');

const {
    sequelize,
    dataTypes,
    checkModelName,
    checkPropertyExists
} = require('sequelize-test-helpers');

const TransactionModel = require('../../models/transaction');

describe('Transaction model', () => {
    const Transaction = TransactionModel(sequelize, dataTypes);
    const transaction = new Transaction();

    checkModelName(Transaction)('Transaction');

    context('properties', () => {
        [
            'quantity_ordered'
        ].forEach(checkPropertyExists(transaction))
    });
});