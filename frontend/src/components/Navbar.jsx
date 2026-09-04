import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <h1>ShopUpp</h1>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/cart">Cart</Link>
        <Link to="/vendor-register">Vendor Register</Link>
      </div>
    </nav>
  );
}

export default Navbar;
