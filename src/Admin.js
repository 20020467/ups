import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Firm from "./pages/firm";
import Categories from "./pages/categories";
import Product from "./pages/products";
import NewProduct from "./pages/product/new";
import Home from "./pages/home";
import Edit_Info from "./pages/product/EditInfo";
import Edit from "./pages/product/edit";

function Admin() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/firm" element={<Firm/>}/>
        <Route path="/category" element={<Categories/>}/>
        <Route path="/products" element={<Product/>}/>
        <Route path="/products/new" element={<NewProduct/>}/>
        <Route path="/products/edit" element={<Edit/>}/>
        <Route path="/products/edit-info" element={<Edit_Info/>}/>
      </Routes>
    </Router>
  );
}

export default Admin;
