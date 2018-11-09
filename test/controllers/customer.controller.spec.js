const sinon = require('sinon');
const request = require('request');
const chai = require('chai');
const should = chai.should;
const customerController = require('../../controllers/customer.controller');
const customer_mock_data = require('../mockData/customer.json');
const config = require('../../config/default.json');
const base = `http://localhost:${config.port}`;

describe('Customers controller', () => {
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

    describe('GET /api/customers', () => {
        it('it should return a list of customers', (done) => {
            const object = customer_mock_data.single.success;
            get.yields(null, object.res, JSON.stringify(object.body));
            request.get(`${base}/api/customers`, (err, res, body) => {
                res.statusCode.should.eql(200);
                res.headers['content-type'].should.contain('application/json');
                body = JSON.parse(body);
                body.status.should.eql('success');
                body.data.length.should.eql(1);
                body.data[0].should.include.keys(
                    'id', 'customer_name', 'phone_number'
                );
                body.data[0].customer_name.should.eql('john');
                done();
            });
        });
    });

    describe('GET /api/customers/:id', () => {
        it('should respond with a single customer', (done) => {
            const obj = customer_mock_data.single.success;
            get.yields(null, obj.res, JSON.stringify(obj.body));
            request.get(`${base}/api/customers/4`, (err, res, body) => {
                res.statusCode.should.equal(200);
                res.headers['content-type'].should.contain('application/json');
                body = JSON.parse(body);
                body.status.should.eql('success');
                body.data[0].should.include.keys(
                    'id', 'customer_name', 'phone_number'
                );
                body.data[0].customer_name.should.eql('john');
                done();
            });
        });

        describe('POST /api/customers', () => {
            it('should return the customer that was added', (done) => {
                const options = {
                    body: {
                        customer_name: 'Titanic',
                        phone_number: 723672323
                    },
                    json: true,
                    url: `${base}/api/customers`
                };
                const obj = customer_mock_data.add.success;
                post.yields(null, obj.res, JSON.stringify(obj.body));
                request.post(options, (err, res, body) => {
                    res.statusCode.should.equal(201);
                    res.headers['content-type'].should.contain('application/json');
                    body = JSON.parse(body);
                    body.status.should.eql('success');
                    body.data[0].should.include.keys(
                        'id', 'customer_name', 'phone_number'
                    );
                    body.data[0].customer_name.should.eql('Titanic');
                    done();
                });
            });
        });

    });

    describe('PUT /api/customers', () => {
        it('should return the customer that was updated', (done) => {
            const options = {
                body: {
                    rating: 9
                },
                json: true,
                url: `${base}/api/customers/5`
            };
            const obj = customer_mock_data.update.success;
            put.yields(null, obj.res, JSON.stringify(obj.body));
            request.put(options, (err, res, body) => {
                res.statusCode.should.equal(200);
                res.headers['content-type'].should.contain('application/json');
                body = JSON.parse(body);
                body.status.should.eql('success');
                body.data[0].should.include.keys(
                    'id', 'customer_name', 'phone_number'
                );
                body.data[0].customer_name.should.eql('Titanic');
                done();
            });
        });
        it('should throw an error if the customer does not exist', (done) => {
            const options = {
                body: {
                    rating: 9
                },
                json: true,
                url: `${base}/api/customers/5`
            };
            const obj = customer_mock_data.update.failure;
            put.yields(null, obj.res, JSON.stringify(obj.body));
            request.put(options, (err, res, body) => {
                res.statusCode.should.equal(404);
                res.headers['content-type'].should.contain('application/json');
                body = JSON.parse(body);
                body.status.should.eql('error');
                body.message.should.eql('Customer does not exist.');
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
    it("should return list of all records", function () {
        let req = {};
        let res = {send: sinon.spy()};
        customerController.getAllRecords(req, res);
        expect(res.send.calledOnce).to.be.false;
        expect(res.send.isSinonProxy).to.be.true;
        expect(res.send.args).to.be.array;
        expect(res.send.calledTwice).to.be.false;
    });
});

describe("Item Controller", function () {
    it("should return list of all customers", function () {
        let req = {};
        let res = {send: sinon.spy()};
        customerController.getAllCustomers(req, res);
        expect(res.send.calledOnce).to.be.false;
        expect(res.send.isSinonProxy).to.be.true;
        expect(res.send.args).to.be.array;
        expect(res.send.calledTwice).to.be.false;
    });
});