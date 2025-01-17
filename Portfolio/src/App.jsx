import Nav from "./components/nav";
import Home from "./pages/home";
import "../index.css";

export default function App() {
  return (
    <>
      <div className="App">
        <Nav />
        <Home />
      </div>
    </>
  );
}
