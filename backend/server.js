const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

let products = [
  { id: 1, name: 'Product 1', price: 29.99, description: 'Description for Product 1' },
  { id: 2, name: 'Product 2', price: 39.99, description: 'Description for Product 2' },
  { id: 3, name: 'Product 3', price: 49.99, description: 'Description for Product 3' },
];

let cart = [];

// Products
app.get('/api/products', (req, res) => {
  res.json(products);
});

app.post('/api/products', (req, res) => {
  const newProduct = { id: products.length + 1, ...req.body };
  products.push(newProduct);
  res.status(201).json(newProduct);
});

// Cart
app.get('/api/cart', (req, res) => {
  res.json(cart);
});

app.post('/api/cart', (req, res) => {
  cart.push(req.body);
  res.status(201).json(cart);
});

app.delete('/api/cart', (req, res) => {
  cart = [];
  res.json({ message: 'Cart cleared' });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
