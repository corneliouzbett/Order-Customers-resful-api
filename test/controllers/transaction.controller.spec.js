const chai = require('chai');
const expect = chai.expect;
const sinon = require("sinon");
const transactionController = require("../../controllers/transaction.controller");

describe('Transaction Controller', () => {
    it('should return list of transactions', () => {
        let req = {};
        let res = {send: sinon.spy()};
        transactionController.findAllTransaction(req, res);
        expect(res.send.calledOnce).to.be.false;
        expect(res.send.isSinonProxy).to.be.true;
        expect(res.send.args).to.be.array;
        expect(res.send.calledTwice).to.be.false;
    })
});