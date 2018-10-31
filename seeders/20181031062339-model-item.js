'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('Items', [{
            item_name: 'Bread',
            unit_cost: 50
        },{
            item_name: 'Milk',
            unit_cost: 30}], {});
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Items', null, {});
    }
};
