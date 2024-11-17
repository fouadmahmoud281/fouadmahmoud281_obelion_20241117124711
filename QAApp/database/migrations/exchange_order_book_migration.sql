CREATE TABLE exchange_order_books (
    id INT AUTO_INCREMENT PRIMARY KEY,
    orderId VARCHAR(255) NOT NULL,
    tradeDate DATE NOT NULL,
    securityId VARCHAR(255) NOT NULL,
    quantity INT NOT NULL
);

-- Insert statement
INSERT INTO exchange_order_books (orderId, tradeDate, securityId, quantity) VALUES (?, ?, ?, ?);

-- Select statement
SELECT * FROM exchange_order_books;

-- Update statement
UPDATE exchange_order_books SET orderId = ?, tradeDate = ?, securityId = ?, quantity = ? WHERE id = ?;

-- Delete statement
DELETE FROM exchange_order_books WHERE id = ?;