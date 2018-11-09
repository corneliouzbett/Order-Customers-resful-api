const transactionRepository = require('../../repository/TransactionsRepository');
const sinon = require('sinon');
const chai = require('chai');
const expect = chai.expect;

describe('Transaction Repository', () =>{
    it('it should return frequent customer', (done) =>{
        let req = {};
        let res = {
            send: sinon.spy()
        };
        transactionRepository.getFrequentCustomer(req, res);
        expect(res.send.calledOnce).to.be.false;
        expect(res.send.isSinonProxy).to.be.true;
        expect(res.send.args).to.be.array;
        expect(res.send.calledTwice).to.be.false;
        done();
    });
});