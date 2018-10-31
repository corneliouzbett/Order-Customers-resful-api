const Sequelize = require('sequelize');

module.exports =
    class Transaction extends Sequelize.Model {
        static init(sequelize) {
            return super.init({
                quantity_ordered: {
                    type: Sequelize.DataTypes.INTEGER,
                    allowNull: false,
                }
            },{ sequelize });
        }
    };