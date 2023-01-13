-- Write your Schema Here -- 
DROP DATABASE IF EXISTS customers_db;
CREATE DATABASE customers_db;

USE customers_db;

CREATE TABLE customers (
    id INT NOT NULL,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    PRIMARY KEY(id)
);

CREATE TABLE customer_order (
    id INT,
    customer_id INT,
    order_details TEXT,
    --notice that commas shouldn't be used after SQL syntax is used
    FOREIGN KEY (customer_id)
    REFERENCES customers(id)
    ON DELETE SET NULL
);
