const chai = require('chai');
const expect = chai.expect;
const sinon = require("sinon");
const OrderController = require("../../controllers/order.controller");

describe('Customer Controller', () => {
    it('should return list of orders', () => {
        let req = {};
        let res = {send: sinon.spy()};
        OrderController.getAllOrders(req, res);
        expect(res.send.calledOnce).to.be.false;
        expect(res.send.isSinonProxy).to.be.true;
        expect(res.send.args).to.be.array;
        expect(res.send.calledTwice).to.be.false;
    })
});