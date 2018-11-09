const orderItemRepository = require('../../repository/OrderItemRepository');

const chai = require('chai');
const expect = chai.expect;
const sinon = require("sinon");

describe('Order Item Repository', () =>{
    it('it should a list of order items', (done) =>{
        let req = {};
        let res = {
            send: sinon.spy()
        };
        orderItemRepository.getAllRecords(req,res);
        console.log(res);
        expect(res.send.isSinonProxy).to.be.true;
        expect(res.send.args).to.be.array;
        expect(res.send.calledTwice).to.be.false;
        done();
    });
});

describe('Order Item Repository', () =>{
    it('it should a list of customer details', (done) =>{
        let req = {};
        let res = {
            send: sinon.spy()
        };
        orderItemRepository.getCustomerOrderDetails(req,res);
        expect(res.send.isSinonProxy).to.be.true;
        expect(res.send.args).to.be.array;
        expect(res.send.calledTwice).to.be.false;
        done();
    });
});

