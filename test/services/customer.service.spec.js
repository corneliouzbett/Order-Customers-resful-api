process.env.NODE_ENV = 'test';
const customerService = require('../../../src/app/service/customer.service');

it('it should return customers', (done) => {
    customerService.findAll()
        .end((err, results) => {
            results.should.have.be.a('array');
            results.length.eql(0);
        })
});