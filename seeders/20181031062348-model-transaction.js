'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('Transactions', [{
            quantity_ordered: 5,
            item_id: 1,
            order_id: 1
        }], {});
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Transactions', null, {});
    }
};
