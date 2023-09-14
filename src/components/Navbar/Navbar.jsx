import React from "react";
import { NavLink } from "react-router-dom";
import { useShoppingCart } from "../../context/ShoppingCartContext";


function logoutUser() {
  localStorage.clear("token");
  localStorage.clear("user");
  window.location.href = "/";
}

function getUsername() {
  const user = JSON.parse(localStorage.getItem("user"));
  return user ? user.username : "";
}

function isLoggedIn() {
  return localStorage.getItem("user");
}

function Navbar() {
  const { openCart, cartQuantity } = useShoppingCart();
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
          {isLoggedIn() ? (
            <a href="/" onClick={logoutUser}>
              {" "}
              logout {getUsername()}
            </a>
          ) : (
            <NavLink to="/login">Login</NavLink>
          )}
        </li>
        <li>
          <img
            src="../../images/basket.jpg"
            alt=""
            width="80px"
            height="80px"
            onClick={openCart}
          />

          <div
            className="rounded-circle bg-danger d-flex justify-content-center align-items-center"
            style={{
              color: "white",
              width: "1.5rem",
              height: "1.5rem",
              position: "absolute",
              bottom: 20,
              right: 50,
              transform: "translate(25%, 25%)",
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

