process.env.NODE_ENV = 'test';
const customerService = require('../../service/customer.service');

it('it should return customers', (done) => {
    customerService.getAllCustomers()
        .then((results) => {
            results.should.have.be.a('array');
            done();
        })
});