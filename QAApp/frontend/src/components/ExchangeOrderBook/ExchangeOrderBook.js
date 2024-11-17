import React from 'react';
import './ExchangeOrderBook.css';

function ExchangeOrderBook() {
  return (
    <div className="exchange-order-book">
      <header className="exchange-order-book-header">
        <h1>Exchange Order Data via ESMA System</h1>
        <div className="branding">NCA Branding</div>
      </header>
      <nav className="navigation-tabs">
        <ul>
          <li>Home</li>
          <li>Exchange Orders</li>
          <li>Settings</li>
        </ul>
      </nav>
      <main className="form-container">
        <form className="order-book-form">
          <div className="form-group">
            <label htmlFor="orderId">Order ID</label>
            <input type="text" id="orderId" name="orderId" />
          </div>
          <div className="form-group">
            <label htmlFor="tradeDate">Trade Date</label>
            <input type="date" id="tradeDate" name="tradeDate" />
          </div>
          <div className="form-group">
            <label htmlFor="securityId">Security ID</label>
            <input type="text" id="securityId" name="securityId" />
          </div>
          <div className="form-group">
            <label htmlFor="quantity">Quantity</label>
            <input type="number" id="quantity" name="quantity" />
          </div>
          <button type="submit" className="primary-action-button">
            Exchange Data
          </button>
        </form>
      </main>
      <footer className="exchange-order-book-footer">
        <ul>
          <li><a href="#support">Support</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><a href="#privacy">Privacy Policy</a></li>
        </ul>
      </footer>
    </div>
  );
}

export default ExchangeOrderBook;