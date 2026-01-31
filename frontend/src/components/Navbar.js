
import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <nav className="nav">
      <h2>🌾 Direct Market</h2>
      <div>
        <Link to="/">Home</Link>
        <Link to="/market">Market</Link>
        <Link to="/farmer-login">Farmer</Link>
        <Link to="/consumer-login">Consumer</Link>
      </div>
    </nav>
  );
}
