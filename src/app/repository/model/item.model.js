const Sequelize = require('sequelize');
module.exports =
    class Item extends Sequelize.Model {
        static init(sequelize) {
            return super.init({
                item_name: {
                    type: Sequelize.DataTypes.STRING,
                    allowNull: false,
                },
                unit_cost: {
                    type: Sequelize.DataTypes.DOUBLE,
                    allowNull: false,
                }
            },{ sequelize });
        }

        static associate(models) {
            this.hasOne(models.Transaction, { foreignKey: 'item_id'});
        }
    };

