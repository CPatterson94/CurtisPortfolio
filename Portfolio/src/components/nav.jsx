import DateTime from "./dateTime";

export default function Nav() {
  return (
    <>
      <nav>
        <div className="nbDateTime">
          <DateTime />
        </div>
        <ul>
          <button>
            <div className="fancy"></div>
            <span className="text">Home</span>
          </button>
          <button>
            <div className="fancy"></div>
            <span className="text">About</span>
          </button>
          <button>
            <div className="fancy"></div>
            <span className="text">Projects</span>
          </button>
          <button>
            <div className="fancy"></div>
            <span className="text">Resume</span>
          </button>
          <button>
            <div className="fancy"></div>
            <span className="text">Contact Me</span>
          </button>
        </ul>
      </nav>
    </>
  );
}
