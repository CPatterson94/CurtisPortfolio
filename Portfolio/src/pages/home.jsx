export default function Home() {
  return (
    <>
      <div className="home-container">
        <img
          className="home-image"
          src="src/assets/Profile.jpg"
          alt="Picture of Daniel"
        />
        <div className="home-paragraph">
          <h1>Hello There!</h1>
          <h2 style={{ fontStyle: "italic", fontSize: ".8em" }}>
            (In an Obi-Wan voice)
          </h2>
          <p>
            I’m a passionate web developer specializing in creating functional,
            beautiful, and user-friendly websites. Explore my projects, learn
            about my skills, and let’s build something amazing together.
          </p>
        </div>
      </div>
    </>
  );
}
