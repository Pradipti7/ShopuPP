import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Cart() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/cart')
      .then(res => res.json())
      .then(data => setCart(data))
      .catch(err => console.error('Error fetching cart:', err));
  }, []);

  const clearCart = () => {
    fetch('http://localhost:5000/api/cart', { method: 'DELETE' })
      .then(() => setCart([]))
      .catch(err => console.error('Error clearing cart:', err));
  };

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="cart">
      <h2>My Cart</h2>
      <Link to="/products">Continue Shopping</Link>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul>
            {cart.map((item, index) => (
              <li key={index}>{item.name} - ${item.price.toFixed(2)}</li>
            ))}
          </ul>
          <p>Total: ${total.toFixed(2)}</p>
          <button onClick={clearCart}>Clear Cart</button>
        </>
      )}
    </div>
  );
}

export default Cart;
