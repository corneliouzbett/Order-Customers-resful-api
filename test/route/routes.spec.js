process.env.NODE_ENV = 'test';

let Customer = require('../../src/app/repository/model/customer.model');

let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../../server');
let should = chai.should();

chai.use(chaiHttp);

describe('customers', () => {
    beforeEach((done) => {
        Customer.destroy({where: {},
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
           .end((err, res) =>{
               res.should.have.status(200);
               res.body.should.be.a('array');
               done();
           } )
   })
});

describe('/GET one customer', () => {
    it('it should GET one customers', (done) => {
        let id = 1;
        chai.request(server)
            .get('/api/customers/:id')
            .end((err, res) =>{
                res.should.have.status(200);
                res.body.should.be.a('array');
                done();
            } )
    })
});

describe('/POST customer', () => {
    it('it should POST customer', (done) =>{
        let customer = {
            id: 141, customer_name: "Bett myname", phone_number: 723034887,
            createdAt: "2018-10-24:0000", updatedAt: "2018-10-24:0000"
        };
        chai.request(server)
            .post('/api/customers')
            .send(customer)
            .end((err, res) =>{
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('customer_name').eql("Bett myname");
                res.body.should.have.property('phone_number').eql(723034887);
                res.body.should.have.property('id').eql(141);
                done();
            })
    });
});

describe('/GET item', () => {
   it('it should GET all the items', (done) => {
       chai.request(server)
           .get('/api/items')
           .end((err, res) =>{
               res.should.have.status(200);
               res.body.should.be.a('array');
               done();
           } )
   })
});

describe('/POST item', () => {
    it('it should POST item', (done) =>{
        let item = {
            id: 100, item_name: "Bread", unit_cost: 50,
            createdAt: "2018-10-24:0000", updatedAt: "2018-10-24:0000"
        };
        chai.request(server)
            .post('/api/items')
            .send(item)
            .end((err, res) =>{
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('id').eql(100);
                res.body.should.have.property('item_name').eql("Bread");
                res.body.should.have.property('unit_cost').eql(50);
                done();
            })
    });
});

describe('/GET order', () => {
   it('it should GET all the orders', (done) => {
       chai.request(server)
           .get('/api/orders')
           .end((err, res) =>{
               res.should.have.status(200);
               res.body.should.be.a('array');
               done();
           } )
   })
});

describe('/POST order', () => {
    it('it should POST order', (done) =>{
        let order = {
            id: 101, order_date: '2018-10-25', quantity_ordered: 30,
            createdAt: "2018-10-24:0000", updatedAt: "2018-10-24:0000"
        };
        chai.request(server)
            .post('/api/orders')
            .send(order)
            .end((err, res) =>{
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('quantity_ordered').eql(30);
                res.body.should.have.property('order_date').eql('2018-10-25');
                res.body.should.have.property('id').eql(101);
                done();
            })
    });
});