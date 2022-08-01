import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/index.jsx";
import Shop from "./pages/shop/index.jsx";
import About from "./pages/about/index.jsx";
import NavBar from "./components/navBar/index.jsx";
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
