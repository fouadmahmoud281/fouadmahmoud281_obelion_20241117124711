const { Model, DataTypes, Sequelize } = require('sequelize');

const sequelize = new Sequelize('QA', 'root', 'root', {
  host: 'db',
  port: 3306,
  dialect: 'mysql'
});

class ExchangeOrderBook extends Model {
  static init(sequelize) {
    super.init({
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      orderId: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true
        }
      },
      tradeDate: {
        type: DataTypes.DATE,
        allowNull: false,
        validate: {
          isDate: true
        }
      },
      securityId: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true
        }
      },
      quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          isInt: true,
          min: 1
        }
      }
    }, {
      sequelize,
      modelName: 'ExchangeOrderBook',
      tableName: 'exchange_order_books',
      timestamps: false
    });
  }
}

ExchangeOrderBook.init(sequelize);

module.exports = ExchangeOrderBook;