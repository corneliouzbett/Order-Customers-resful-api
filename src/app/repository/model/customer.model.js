const Sequelize = require('sequelize');

module.exports =
    class Customer extends Sequelize.Model {
        static init(sequelize) {
            return super.init({
                customer_name: {
                    type: Sequelize.DataTypes.STRING,
                    allowNull: false,
                },
                phone_number: {
                    type: Sequelize.DataTypes.INTEGER,
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