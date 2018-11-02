const chai = require('chai');
const expect = chai.expect;

const {
    sequelize,
    dataTypes,
    checkModelName,
    checkPropertyExists
} = require('sequelize-test-helpers');

const ItemModel = require('../../models/item');
const Transaction = require('../../models/transaction');

describe('Item Model', () => {
    const Item = ItemModel(sequelize, dataTypes);
    const item = new Item();

    checkModelName(Item)('Item');

    context('properties', () => {
        [
            'item_name',
            'unit_cost'
        ].forEach(checkPropertyExists(item))
    });

    context('associations', () => {

        before(() => {
            Item.associate({Transaction})
        });

/*        it('defined a hasOne association with Transaction', () => {
            expect(Item.hasOne).to.have.been.calledWith(Transaction)
        })*/
    });
});