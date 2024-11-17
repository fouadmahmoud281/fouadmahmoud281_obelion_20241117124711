import React from 'react';
import './ExchangeOrderBookPage.css';

function ExchangeOrderBookPage() {
  return (
    <div className="exchange-order-book-page">
      <header className="header">
        <h1>Exchange Order Data via ESMA System</h1>
        <div className="branding">NCA Branding</div>
      </header>
      <nav className="navigation-tabs">
        <ul>
          <li>Home</li>
          <li>Order Book</li>
          <li>Settings</li>
        </ul>
      </nav>
      <main className="main-content">
        <form className="order-book-form">
          <fieldset>
            <legend>Order Book Data</legend>
            <div className="form-group">
              <label htmlFor="orderId">Order ID</label>
              <input type="text" id="orderId" name="orderId" required />
            </div>
            <div className="form-group">
              <label htmlFor="orderDate">Order Date</label>
              <input type="date" id="orderDate" name="orderDate" required />
            </div>
            <div className="form-group">
              <label htmlFor="orderAmount">Order Amount</label>
              <input type="number" id="orderAmount" name="orderAmount" required />
            </div>
          </fieldset>
          <button type="submit" className="primary-action-button">Exchange Data</button>
        </form>
      </main>
      <footer className="footer">
        <ul>
          <li>Privacy Policy</li>
          <li>Terms of Service</li>
          <li>Contact Support</li>
        </ul>
      </footer>
    </div>
  );
}

export default ExchangeOrderBookPage;