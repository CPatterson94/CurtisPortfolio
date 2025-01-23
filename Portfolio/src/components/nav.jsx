import { useState } from "react";
import DateTime from "./dateTime";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faHome,
  faUser,
  faProjectDiagram,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

export default function Nav() {
  const [collapsed, setCollapsed] = useState(false);

  const toggleNav = () => {
    setCollapsed(!collapsed);
  };

  return (
    <nav className={`nav ${collapsed ? "collapsed" : ""}`}>
      <div className="nav-links">
        <button className="toggle-button" onClick={toggleNav}>
          <FontAwesomeIcon icon={faBars} />
        </button>
        <Link to="/" className="navLink">
          <button>
            <FontAwesomeIcon icon={faHome} />
            {!collapsed && " Home"}
          </button>
        </Link>
        <Link to="/about" className="navLink">
          <button>
            <FontAwesomeIcon icon={faUser} />
            {!collapsed && " About Me"}
          </button>
        </Link>
        <Link to="/projects" className="navLink">
          <button>
            <FontAwesomeIcon icon={faProjectDiagram} />
            {!collapsed && " Projects"}
          </button>
        </Link>
        <Link to="/contact" className="navLink">
          <button>
            <FontAwesomeIcon icon={faEnvelope} />
            {!collapsed && " Contact Me"}
          </button>
        </Link>
      </div>
      {!collapsed && (
        <div className="nbDateTime-container">
          <DateTime />
        </div>
      )}
    </nav>
  );
}
