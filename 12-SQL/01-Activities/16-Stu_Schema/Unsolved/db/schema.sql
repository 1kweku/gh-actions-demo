-- Write your schema here --
DROP DATABASE IF EXISTS inventory_db;
CREATE DATABASE inventory_db;

USE inventory_db;

CREATE TABLE categories(
    id INT NOT NULL,
    category_name VARCHAR(30) NOT NULL,
    PRIMARY KEY(id)
);

CREATE TABLE products(
    id INT NOT NULL,
    category_id INT NOT NULL,
    product_name VARCHAR(30) NOT NULL,
    category_name VARCHAR(100) NOT NULL,
    price INT NOT NULL, 
    in_stock BOOLEAN NOT NULL,
    FOREIGN KEY(category_id)
    REFERENCES categories(id)
);