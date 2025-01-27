import { BrowserRouter, Routes, Route } from "react-router-dom";
import Banner from "./components/banner";
import Nav from "./components/nav";
import Footer from "./components/footer";
import Home from "./pages/home";
import About from "./pages/about";
import Projects from "./pages/projects";
import ContactMe from "./pages/contactMe";

import "../index.css";

export default function App() {
  return (
    <>
      <div className="App">
        <BrowserRouter>
          <Banner />
          <Nav />
          <div className="main-content">
            <Routes>
              <Route path={"/"} element={<Home />} />
              <Route path={"/about"} element={<About />} />
              <Route path={"/projects"} element={<Projects />} />
              <Route path={"/contact"} element={<ContactMe />} />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
      </div>
    </>
  );
}
