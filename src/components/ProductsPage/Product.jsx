import React from "react";
import { useState } from "react";
import { formatCurrency } from "../../utilities/FormatCurrency";
import { Offcanvas } from "react-bootstrap";
import OpenedProduct from "./OpenedProduct";
import { Button } from "react-bootstrap";
import { useShoppingCart } from "../../context/ShoppingCartContext";

export default function Product({ product }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const { id, name, imageSource, price } = product;
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useShoppingCart();
  const quantity = getItemQuantity(id);
  return (
    <div className="productContainer">
      <div>
        <img src={imageSource} alt="" onClick={handleShow} className="productImage" />
        <Offcanvas
          className="offcanvas-top"
          show={show}
          onHide={handleClose}
          style={{ height: "95vh", width: "95vw", top: "2.5vh", left: "2.5vw" }}
        >
          <Offcanvas.Header closeButton />
          <Offcanvas.Title>{name}</Offcanvas.Title>
          <Offcanvas.Body>
            <OpenedProduct product={product} />
          </Offcanvas.Body>
        </Offcanvas>
      </div>

      <div className="productName" onClick={handleShow}>
        <p style={{ textShadow: "-1px 0 white, 0 1px white, 1px 0 white, 0 -1px white" }}>{name}</p>
      </div>
      <div><p className="productPrice" onClick={handleShow} style={{ textShadow: "-1px 0 white, 0 1px white, 1px 0 white, 0 -1px white" }}>{formatCurrency(price)}</p></div>

      <div className="addToCartArea">
        {quantity === 0 ? (
          <Button className="w-100" variant="dark" onClick={() => increaseCartQuantity(id)}>
            + Add To Cart
          </Button>
        ) : (
          <div
            className="d-flex align-items-center flex-row"
            style={{ gap: ".5rem" }}
          >
            <div
              className="d-flex align-items-center justify-content-center"
              style={{ gap: ".5rem" }}
            >
              <Button variant="dark" onClick={() => decreaseCartQuantity(id)}>-</Button>
              <div style={{ color: "var(--main-bg-color)" }}>
                <span className="fs-2" >{quantity}</span>
              </div>
              <Button variant="dark" onClick={() => increaseCartQuantity(id)}>+</Button>
            </div>
            <Button
              onClick={() => removeFromCart(id)}
              variant="danger"
              size="sm"
            >
              Remove
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
