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
        <img src={imageSource} alt="" className="productImage" />
        <Offcanvas
          className="offcanvas-top"
          show={show}
          onHide={handleClose}
          style={{ height: "95vh", width: "95vw", top: "2.5vh", left: "2.5vw" }}
        >
          <div style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "row-reverse",
          }}>
            <Offcanvas.Header closeButton style={{ fontSize: "3vh", marginRight: "2vw", padding: "0" }} />
            <Offcanvas.Title style={{ fontSize: "4vh", width: "100%", textAlign: "center" }}>{name}</Offcanvas.Title>
          </div>
          <Offcanvas.Body style={{ paddingTop: "0" }}>
            <OpenedProduct product={product} />
          </Offcanvas.Body>
        </Offcanvas>
      </div >

      <div className="productName" >
        <p style={{ textShadow: "-1px 0 white, 0 1px white, 1px 0 white, 0 -1px white",height:"80%",padding:"2vw" }} onClick={handleShow}>{name}</p>

        <div style={{
          display: "flex",
          flexDirection: "row-reverse",
          width: "100%"
        }}><p className="productPrice"  style={{ textShadow: "-1px 0 white, 0 1px white, 1px 0 white, 0 -1px white" }}>{formatCurrency(price)}</p>
          <div className="addToCartArea">
            {quantity === 0 ? (
              <Button variant="dark" onClick={() => increaseCartQuantity(id)}>
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
      </div>


    </div >
  );
}
