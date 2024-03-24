import { Link } from "react-router-dom";
import "./Navbar.css";
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
          <Link to="/recipeUpload">Recipe Upload</Link>
        </li>

        <li>
          <Link to="/UserProfile">User Profile</Link>
        </li>

        <li>
          <Link to="/AboutUs">About Us</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
