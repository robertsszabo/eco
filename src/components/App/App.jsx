import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Services from "../ServicesPage/ServicesPage";
import Home from "../HomePage/HomePage";
import ProductsPage from "../ProductsPage/ProductsPage";
import Login from "../Login/Login";
import Signup from "../Login/Signup";
import ContactPage from "../ContactPage/ContactPage";
import { ShoppingCartProvider } from "../../context/ShoppingCartContext";
import { AuthProvider } from "../../context/AuthContext";
import PrivateRoute from "../Login/PrivateRoute"
import ForgotPassword from "../Login/ForgotPassword"
import UpdateProfile from "../Login/UpdateProfile"


function App() {

  return (
    <div className="anchorPoint">
      
      <AuthProvider>
      <ShoppingCartProvider>
        <Navbar />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/forgot-password" element={<PrivateRoute />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/forgot-password" element={<UpdateProfile />} />
            {/* <Route path="/admin.products/" element={<AdminProductsPage />} /> */}
          
        </Routes>
      </ShoppingCartProvider>
      </AuthProvider>
    </div>
  );


};
export default App;