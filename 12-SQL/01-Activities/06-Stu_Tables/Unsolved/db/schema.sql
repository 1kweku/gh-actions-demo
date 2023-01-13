DROP DATABASE IF EXISTS books_db;
-- Creates the "books_db" database --
CREATE DATABASE books_db;
USE books_db;

CREATE TABLE biography (
    name VARCHAR(100) NOT NULL,
    id INT NOT NULL
);
-- Add biography table --
