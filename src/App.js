import { Navbar } from "./components/Navbar";
import Prism from "./components/Prism";
import { Products } from "./components/Products";
import { Routes, Route } from "react-router-dom";
import './App.css';
import { Home } from "./components/Home";
import { About } from "./components/About";
import { Footer } from "./components/Footer";
import { ProductDetails } from "./components/ProductDetails";

function App() {
  return (
    <div className="App">
      <div className="app-background">
        <Prism
          animationType="rotate"
          timeScale={0.5}
          height={3.5}
          baseWidth={5.5}
          scale={3.6}
          hueShift={0}
          colorFrequency={1}
          noise={0}
          glow={1}
        />
      </div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetails />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
