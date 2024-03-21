import { Link } from "react-router-dom";
import "../components/Navbar.css";
import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav>
      <Link to="/" className="title">
        Home
      </Link>
      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? "open" : ""}>
        <li>
          <Link to="/AddProduct">Add Product</Link>
        </li>

        <li>
          <Link to="/Favorites">Favorites</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
