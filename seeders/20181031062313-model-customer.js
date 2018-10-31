'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('Customers', [{
            customer_name: 'Paul wendy',
            phone_number: 712774899
        }], {});
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Customers', null, {});
    }
};
