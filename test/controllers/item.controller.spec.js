const chai = require("chai");
const expect = chai.expect;
const sinon = require("sinon");
const ItemController = require("../../controllers/item.controller");

describe("Item Controller", function () {
    it("should return list of items", function () {
        let req = {};
        let res = {send: sinon.spy()};
        ItemController.getAllItems(req, res);
        console.log(res.send);
    });
});