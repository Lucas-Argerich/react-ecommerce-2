import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/index.jsx";
import Shop from "./pages/shop/index.jsx";
import About from "./pages/about/index.jsx";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
