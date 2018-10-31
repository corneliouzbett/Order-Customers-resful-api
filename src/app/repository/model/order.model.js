const Sequelize = require('sequelize');

module.exports =
    class Order extends Sequelize.Model {
        static init(sequelize) {
            return super.init({
                date_ordered: {
                    type: Sequelize.DataTypes.DATEONLY,
                    allowNull: false,
                }
            },{ sequelize });
        }

        static associate(models) {
            this.hasOne(models.Transaction, {
                onDelete: 'CASCADE',
                foreignKey: {
                    allowNull: false,
                },
            });
        }
    };