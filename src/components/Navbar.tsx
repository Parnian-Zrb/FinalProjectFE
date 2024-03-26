import { Link } from "react-router-dom";
import "./Navbar.css";
// import { useState } from "react";

const Navbar = () => {
  // const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        {/* <img src="/logo.png" alt="Logo" /> */}
        Home
      </Link>
      <div className="nav-links">
        <Link to="/" className="nav-link">
          Home
        </Link>
        <Link to="/AboutUs" className="nav-link">
          About Us
        </Link>
        <Link to="/recipeDetails" className="nav-link">
          Recipe Details
        </Link>
        <Link to="/recipeUpload" className="nav-link">
          Upload Recipe
        </Link>
        <Link to="/UserProfile" className="nav-link">
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
