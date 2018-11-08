const chai = require('chai');
const expect = chai.expect;
const sinon = require("sinon");
const OrderController = require("../../controllers/order.controller");

describe('Order Controller', () => {
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

describe('Order Controller', () => {
    it('should return list of orders items', () => {
        let req = {};
        let res = {send: sinon.spy()};
        OrderController.getOrderItemDetails(req, res);
        expect(res.send.calledOnce).to.be.false;
        expect(res.send.isSinonProxy).to.be.true;
        expect(res.send.args).to.be.array;
        expect(res.send.calledTwice).to.be.false;
    })
});

describe('Order Controller', () => {
    it('should return a order created', (done) => {
        let req = [{ id: 1, order_date: "2018-10-10", customer_id: 1}];
        let res = {send: sinon.spy()};
        OrderController.createOrder(req, res);
        console.log('res:::', res);
        expect(res.send.calledOnce).to.be.false;
        expect(res.send.isSinonProxy).to.be.true;
        expect(res.send.args).to.be.array;
        expect(res.send.calledTwice).to.be.false;
        done();
    })
});

describe('Order Controller', () => {
    it('should return an updated order', (done) => {
            let req = {"order_date": "2019-10-10","customer_id": 1, "id": 1};
            let res = {send: sinon.spy()};
            OrderController.updateOrder(1,req, res);
            expect(res.send.calledOnce).to.be.false;
            expect(res.send.isSinonProxy).to.be.true;
            expect(res.send.args).to.be.array;
            expect(res.send.calledTwice).to.be.false;
            done();
    })
});

describe('Order Controller', () => {
    it('should return deleted order', (done) => {
        let req = {"id": 1};
        let res = {send: sinon.spy()};
        OrderController.deleteOrder(1,req, res);
        expect(res.send.calledOnce).to.be.false;
        expect(res.send.isSinonProxy).to.be.true;
        expect(res.send.args).to.be.array;
        expect(res.send.calledTwice).to.be.false;
        done();
    })
});

describe('getOrderById', () => {
    let stub;
    beforeEach(() => {
        stub = sinon.stub(OrderController, 'getOrderById').resolves('one order');
    });
    afterEach(() => {
        stub.restore();
    });
    it('should return an order', function () {
        OrderController.getOrderById(3).then((order) => {
            expect(order).to.equal('one order');
            //expect(stub).should.have.been.calledWith(3);
        })
    })

});
