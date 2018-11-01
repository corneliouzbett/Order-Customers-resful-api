const chai = require('chai');
const expect = chai.expect;
const itemService = require('../../service/item.service');

describe('Item service', () => {
    it('should return a list items', () => {
        expect(itemService.getAllItems()).to.be.array;
    });

    it('should return an object item', function () {
        expect(itemService.getItemById(1)).to.be.object;
    });
});