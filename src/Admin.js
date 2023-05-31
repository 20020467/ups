import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Firm from "./pages/admin/firm";
import Categories from "./pages/admin/categories";
import Product from "./pages/admin/products";
import NewProduct from "./pages/admin/product/new";
import Home from "./pages/admin/home";
import Layout from "./pages/admin/components/Layout";
import { useEffect, useState } from "react";

function Admin() {
  return (
    <Router>
      <Routes>
        <Route path="/admin" element={<Home/>}/>
        <Route path="/admin/firm" element={<Firm/>}/>
        <Route path="/admin/category" element={<Categories/>}/>
        <Route path="/admin/products" element={<Product/>}/>
        <Route path="/admin/products/new" element={<NewProduct/>}/>
      </Routes>
    </Router>
  );
}

export default Admin;
