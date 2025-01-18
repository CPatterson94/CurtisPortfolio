import DateTime from "./dateTime";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav>
      <div className="nbDateTime">
        <DateTime />
      </div>
      <div>
        <Link to="/" className="navLink">
          <button>Home</button>
        </Link>
        <Link to="/about" className="navLink">
          <button>About Me</button>
        </Link>
        <Link to="/projects" className="navLink">
          <button>Projects</button>
        </Link>
        <Link to="/resume" className="navLink">
          <button>Resume</button>
        </Link>
        <Link to="/contact" className="navLink">
          <button>Contact Me</button>
        </Link>
      </div>
    </nav>
  );
}
