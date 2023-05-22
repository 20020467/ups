import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/home/Home";
import ProductDetail from "./pages/productDetail/productDetail";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productDetail" element={<ProductDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
