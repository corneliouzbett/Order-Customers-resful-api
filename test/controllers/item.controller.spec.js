const ItemController = require("../../controllers/item.controller");
const sinon = require('sinon');
const request = require('request');
const chai = require('chai');
const should = chai.should;
const expect = chai.expect;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         

const item_mock_data = require('../mockData/item.json');
const config = require('../../config/default.json');
const base = `http://localhost:${config.port}`;

describe('Item controller', () => {
    let get;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        
    let post;
    let put;
    beforeEach(() => {
        get = sinon.stub(request, 'get');
        post = sinon.stub(request, 'post');                                                                                                                                                                                                                                                                                                 
        put = sinon.stub(request, 'put');
    });
    afterEach(() => {
        request.get.restore();
        request.post.restore();
        request.put.restore();
    });

    describe('GET /api/items', () => {
        it('it should return a list of items', (done) => {
            const object = item_mock_data.single.success;
            get.yields(null, object.res, JSON.stringify(object.body));
            request.get(`${base}/api/items`, (err, res, body) => {
                res.statusCode.should.eql(200);
                res.headers['content-type'].should.contain('application/json');
                body = JSON.parse(body);
                body.status.should.eql('success');
                body.data.length.should.eql(1);
                body.data[0].should.include.keys(
                    'id', 'item_name', 'unit_cost'
                );
                body.data[0].item_name.should.eql('bread');
                done();
            });
        });
    });

    describe('GET /api/items/:id', () => {
        it('should respond with a single item', (done) => {
            const obj = item_mock_data.single.success;
            get.yields(null, obj.res, JSON.stringify(obj.body));
            request.get(`${base}/api/items/4`, (err, res, body) => {
                res.statusCode.should.equal(200);
                res.headers['content-type'].should.contain('application/json');
                body = JSON.parse(body);
                body.status.should.eql('success');
                body.data[0].should.include.keys(
                    'id', 'item_name', 'unit_cost'
                );
                body.data[0].item_name.should.eql('bread');
                done();
            });
        });

        describe('POST /api/items', () => {
            it('should return the item that was added', (done) => {
                const options = {
                    body: {
                        item_name: 'bread',
                        unit_cost: 34
                    },
                    json: true,
                    url: `${base}/api/items`
                };
                const obj = item_mock_data.add.success;
                post.yields(null, obj.res, JSON.stringify(obj.body));
                request.post(options, (err, res, body) => {
                    res.statusCode.should.equal(201);
                    res.headers['content-type'].should.contain('application/json');
                    body = JSON.parse(body);
                    body.status.should.eql('success');
                    body.data[0].should.include.keys(
                        'id', 'item_name', 'unit_cost'
                    );
                    body.data[0].item_name.should.eql('milk');
                    done();
                });
            });
        });

    });

    describe('PUT /api/items', () => {
        it('should return the item that was updated', (done) => {
            const options = {
                body: {
                    rating: 9
                },
                json: true,
                url: `${base}/api/items/5`
            };
            const obj = item_mock_data.update.success;
            put.yields(null, obj.res, JSON.stringify(obj.body));
            request.put(options, (err, res, body) => {
                res.statusCode.should.equal(200);
                res.headers['content-type'].should.contain('application/json');
                body = JSON.parse(body);
                body.status.should.eql('success');
                body.data[0].should.include.keys(
                    'id', 'item_name', 'unit_cost'
                );
                body.data[0].item_name.should.eql('fat');
                done();
            });
        });
        it('should throw an error if the item does not exist', (done) => {
            const options = {
                body: {
                    rating: 9
                },
                json: true,
                url: `${base}/api/items/5`
            };
            const obj = item_mock_data.update.failure;
            put.yields(null, obj.res, JSON.stringify(obj.body));
            request.put(options, (err, res, body) => {
                res.statusCode.should.equal(404);
                res.headers['content-type'].should.contain('application/json');
                body = JSON.parse(body);
                body.status.should.eql('error');
                body.message.should.eql('Item does not exist.');
                done();
            });
        });
    });

    // describe('DELETE /api/customers/:id', () => {
    //     it('should return the customer that was deleted', (done) => {
    //         const obj = customer_mock_data.delete.success;
    //         this.delete.yields(null, obj.res, JSON.stringify(obj.body));
    //         request.delete(`${base}/api/customers/5`, (err, res, body) => {
    //             res.statusCode.should.equal(200);
    //             res.headers['content-type'].should.contain('application/json');
    //             body = JSON.parse(body);
    //             body.status.should.eql('success');
    //             body.data[0].should.include.keys(
    //                 'id', 'customer_name', 'phone_number'
    //             );
    //             body.data[0].customer_name.should.eql('Titanic');
    //             done();
    //         });
    //     });
    //     it('should throw an error if the customer does not exist', (done) => {
    //         const obj = customer_mock_data.delete.failure;
    //         this.delete.yields(null, obj.res, JSON.stringify(obj.body));
    //         request.delete(`${base}/api/customers/5`, (err, res, body) => {
    //             res.statusCode.should.equal(404);
    //             res.headers['content-type'].should.contain('application/json');
    //             body = JSON.parse(body);
    //             body.status.should.eql('error');
    //             body.message.should.eql('That customer does not exist.');
    //             done();
    //         });
    //     });
    // });

});

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