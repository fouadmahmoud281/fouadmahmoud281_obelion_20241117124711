module.exports = {
  up: (queryInterface, Sequelize) => 
    queryInterface.bulkInsert('exchange_order_books', []),
  
  down: (queryInterface, Sequelize) => 
    queryInterface.bulkDelete('exchange_order_books', null, {})
};