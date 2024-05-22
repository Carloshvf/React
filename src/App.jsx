// Components
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";

// CSS
import "./App.css";

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col" style={{ backgroundColor: "gray" }}>
          <Header />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <Home />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
