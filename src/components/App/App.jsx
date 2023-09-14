import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Services from "../ServicesPage/ServicesPage";
import Home from "../HomePage/HomePage";
import ProductsPage from "../ProductsPage/ProductsPage";
import Login from "../Login/Login";
import ContactPage from "../ContactPage/ContactPage";
import { ShoppingCartProvider } from "../../context/ShoppingCartContext";

import useToken from "./useToken";
import User from "../User/User";


function App() {

  useEffect(() => {
    function handleResize() {
      console.log('width in cm: ', window.innerHeight/600)
      console.log('height: ', window.innerHeight/600)
    }

    window.addEventListener('resize', handleResize)
  })

  const { setToken } = useToken();
  const { setUser } = User();



  return (
    <div className="anchorPoint">

      <ShoppingCartProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route
            path="/login"
            element={<Login setToken={setToken} setUser={setUser} />}
          />
          {/* <Route path="/admin.products/" element={<AdminProductsPage />} /> */}
        </Routes>
      </ShoppingCartProvider>
    </div>
  );


};
export default App;