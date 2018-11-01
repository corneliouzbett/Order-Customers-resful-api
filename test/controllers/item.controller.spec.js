const chai = require("chai");
const expect = chai.expect;
const sinon = require("sinon");
const ItemController = require("../../controllers/item.controller");

describe("Item Controller", function () {
    it("should return list of items", function () {
        let req = {};
        let res = {send: sinon.spy()};
        ItemController.getAllItems(req, res);
        expect(res.send.calledOnce).to.be.false;
        expect(res.send.isSinonProxy).to.be.true;
        expect(res.send.args).to.be.array;
        expect(res.send.calledTwice).to.be.false;
    });
});