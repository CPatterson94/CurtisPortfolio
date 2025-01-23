import { useState } from "react";
import DateTime from "./dateTime";
import { Link } from "react-router-dom";

export default function Nav() {
  const [collapsed, setCollapsed] = useState(false);

  const toggleNav = () => {
    setCollapsed(!collapsed);
  };

  return (
    <nav className={`nav ${collapsed ? "collapsed" : ""}`}>
      <button className="toggle-button" onClick={toggleNav}>
        {/* Add your SVG icon here */}
        {collapsed ? ">" : "<"}
      </button>
      <div className="nbDateTime-container">
        <DateTime />
      </div>
      <div className="nav-links">
        <Link to="/" className="navLink">
          <button>Home</button>
        </Link>
        <Link to="/about" className="navLink">
          <button>About Me</button>
        </Link>
        <Link to="/projects" className="navLink">
          <button>Projects</button>
        </Link>
        <Link to="/contact" className="navLink">
          <button>Contact Me</button>
        </Link>
      </div>
    </nav>
  );
}
