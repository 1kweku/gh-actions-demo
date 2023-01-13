INSERT INTO categories (id, category_name)
VALUES 
(01, 'Kitchen'),
(02, 'Living room'),
(03, 'Bathroom'); 

INSERT INTO products (id, category_id, product_name, category_name, price, in_stock)
VALUES 
(24, 01, 'Blender', 'Kitchen', 80, true),
(18, 02, 'Ottoman', 'Living room', 350, false),
(37, 03, 'Toothbrush', 'Bathroom', 20, true);
