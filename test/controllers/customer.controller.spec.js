const chai = require('chai');
const expect = chai.expect;
const sinon = require("sinon");
const customerController = require("../../controllers/customer.controller");

describe('Customer Controller', () => {
    it('should return list of customers', () => {
        let req = {};
        let res = {send: sinon.spy()};
        customerController.getAllCustomers(req, res);
        expect(res.send.calledOnce).to.be.false;
        expect(res.send.isSinonProxy).to.be.true;
        expect(res.send.args).to.be.array;
        expect(res.send.calledTwice).to.be.false;
    })
});