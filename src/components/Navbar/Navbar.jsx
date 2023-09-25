import React from "react";
import { NavLink } from "react-router-dom";
import { useShoppingCart } from "../../context/ShoppingCartContext";
import { useAuth } from "../../context/AuthContext"

function Navbar() {
  const { openCart, cartQuantity } = useShoppingCart();
  const { currentUser, logout } = useAuth()
  return (
    <div>
      <ul>
        <li id="home">
          <NavLink id="homeButton" to="/">Ecosistem</NavLink>
        </li>
        <li>
          <NavLink to="/products">Produse</NavLink>
        </li>
        <li>
          <NavLink to="/services">Servicii</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
        <li>
          {currentUser ? (
            <NavLink to="/" onClick={logout}>
              logout
            </NavLink>
          ) : (
            <NavLink to="/login">Login</NavLink>
          )}
        </li>
        <li>
          <img
            src="../../images/basket.jpg"
            alt=""
            
            style={{width: "4vh",
            height: "4vh",    
            
            position: "absolute",        
            right: "1vw",
            top: "0vh",
            borderRadius:"50%"}}
            onClick={openCart}
          />

          <div
            className=" d-flex justify-content-center align-items-center"
            style={{
              color: "white",
              width: "1vh",
              height: "1vh",
              position: "absolute",
              top: "1vw",
              right: "3vw"
            }}
          >
            {cartQuantity}
          </div>
        </li>
      </ul>
    </div>

  );
}

export default Navbar;

