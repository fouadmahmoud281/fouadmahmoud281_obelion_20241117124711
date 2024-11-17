const ExchangeOrderBook = require('../models/ExchangeOrderBookModel');

// Create a new exchange order
exports.createOrder = async (req, res) => {
  try {
    const { orderId, tradeDate, securityId, quantity } = req.body;
    const newOrder = await ExchangeOrderBook.create({ orderId, tradeDate, securityId, quantity });
    res.status(201).json(newOrder);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get all exchange orders
exports.getAllOrders = async (req, res) => {
  try {
    const orders = await ExchangeOrderBook.findAll();
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get a single exchange order by ID
exports.getOrderById = async (req, res) => {
  try {
    const { id } = req.params;
    const order = await ExchangeOrderBook.findByPk(id);
    if (!order) {
      return res.status(404).json({ error: 'Order not found' });
    }
    res.status(200).json(order);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update an existing exchange order
exports.updateOrder = async (req, res) => {
  try {
    const { id } = req.params;
    const { orderId, tradeDate, securityId, quantity } = req.body;
    const order = await ExchangeOrderBook.findByPk(id);
    if (!order) {
      return res.status(404).json({ error: 'Order not found' });
    }
    await order.update({ orderId, tradeDate, securityId, quantity });
    res.status(200).json(order);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete an exchange order
exports.deleteOrder = async (req, res) => {
  try {
    const { id } = req.params;
    const order = await ExchangeOrderBook.findByPk(id);
    if (!order) {
      return res.status(404).json({ error: 'Order not found' });
    }
    await order.destroy();
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};