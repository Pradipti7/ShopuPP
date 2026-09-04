import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home">
      <h2>Welcome to ShopUpp</h2>
      <p>Explore our wide range of products.</p>
      <Link to="/products">Browse Products</Link>
    </div>
  );
}

export default Home;
