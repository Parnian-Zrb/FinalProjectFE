import { Link } from "react-router-dom";
import "./Navbar.css";

import logo from "../assets/Logo.png";

// import { useState } from "react";
import logo from "../assets/food.jpg"
const Navbar = () => {
  // const [menuOpen, setMenuOpen] = useState(false);
  const [userId, setUserId] = useState('12')
  return (
    <nav className="navbar">
      <Link to="/" className="logo">

        <img src={logo} alt="Logo" />

      </Link>
      <div className="nav-links">
        <Link to="/" className="nav-link">
          Home
        </Link>
        <Link to="/about" className="nav-link">
          About Us
        </Link>
        <Link to="/recipe-upload" className="nav-link">
          Upload Recipe
        </Link>
        <Link to={`/user/${userId}`} className="nav-link">
          Profile
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
// {
/* <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
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
      </ul> */
// }
