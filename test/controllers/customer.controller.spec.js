process.env.NODE_ENV = 'test';

const sinon = require('sinon');
const request = require('request');
const chai = require('chai');
const should = chai.should();
const customerMock = require('../mockData/customer');
const config = require('../../config/default.json');
const base = `http://localhost:${config.port}`

describe('Customers controller', () => {

    beforeEach(() => {
        const responseBody = customerMock.responseBody;
        const responseObject = customerMock.responseObject;
        this.get = sinon.stub(request, 'get');
    });
    afterEach(() => {
        request.get.restore();
    });

    describe('GET /api/customers', () => {
        it('it should return a list of customers', (done) => {
            this.get.yields(null, responseObject, JSON.stringify(responseBody));
            request.get(`${base}/api/customers`, (err, res, body) => {
                res.statusCode.should.eql(200);
                res.headers['content-type'].should.contain('application/json');
                body = JSON.parse(body);
                body.status.should.eql('success');
                body.data.length.should.eql(3);
                body.data[0].should.include.keys(
                    'id', 'customer_name', 'phone_number'
                );
                body.data[0].name.should.eql('James woodward');
                done();
            });
        });
    });
});