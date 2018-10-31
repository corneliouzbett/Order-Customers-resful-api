process.env.NODE_ENV = 'test';

let Customer = require('../../models/customer');

let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../../server');
let should = chai.should();

chai.use(chaiHttp);

describe('customers', () => {
    beforeEach((done) => {
        Customer.destroy({
            where: {},
            truncate: true
        }, (err) => {
            done();
        })
    })
});

describe('/GET customer', () => {
    it('it should GET all the customers', (done) => {
        chai.request(server)
            .get('/api/customers')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('array');
                done();
            })
    })
});

describe('/GET one customer', () => {
    it('it should GET one customers', (done) => {
        chai.request(server)
            .get('/api/customers/:id')
            .end((err, res) => {
                res.should.have.status(200);
                done();
            })
    })
});

describe('/POST customer', () => {
    it('it should POST customer', (done) => {
        let customer = {
            id: 141, customer_name: "Bett myname", phone_number: 723034887
        };
        chai.request(server)
            .post('/api/customers')
            .send(customer)
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                done();
            })
    });
});

describe('/GET item', () => {
    it('it should GET all the items', (done) => {
        chai.request(server)
            .get('/api/items')
            .end((err, res) => {
                res.should.have.status(200);
                done();
            })
    })
});

describe('/POST item', () => {
    it('it should POST item', (done) => {
        let item = {
            id: 100, item_name: "Bread", unit_cost: 50
        };
        chai.request(server)
            .post('/api/items')
            .send(item)
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                done();
            })
    });
});

describe('/GET order', () => {
    it('it should GET all the orders', (done) => {
        chai.request(server)
            .get('/api/orders')
            .end((err, res) => {
                res.should.have.status(200);
                done();
            })
    })
});

/*
describe('/POST order', () => {
    it('it should POST order', (done) =>{
        let order = {
            id: 1, order_date: '2018-10-25', customer_id: 1
        };
        chai.request(server)
            .post('/api/orders')
            .send(order)
            .end((err, res) =>{
                res.should.have.status(200);
                done();
            })
    });
});*/

/*describe('/PUT/:id customer', () => {
    it('it should UPDATE a customer given the id', (done) => {
        let customer = {customer_name: "Oreilly w c", phone_number: 7223377337};
        chai.request(server)
            .post('/api/customers')
            .send(customer)
            .put('/api/customers/' + customer.id)
            .send({customer_name: "John w c", phone_number: 7223377337})
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                done();
            });
    });
});*/
