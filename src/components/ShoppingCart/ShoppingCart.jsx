import React from "react";
import { useEffect, useState } from "react";
import { Offcanvas, Stack, Button } from "react-bootstrap";
import { useShoppingCart } from "../../context/ShoppingCartContext";
import CartItem from "./CartItem";
import { formatCurrency } from "../../utilities/FormatCurrency";
import productsList from "../../resources/data/products.json"

export function ShoppingCart({ isOpen }) {
  const { closeCart, cartItems } = useShoppingCart();
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    function simulateNetworkRequest() {
      return new Promise((resolve) => setTimeout(resolve, 20000));
    }

    if (isLoading) {
      simulateNetworkRequest().then(() => {
        setLoading(false);
      });
    }
  }, [isLoading]);


  const handleClick = () => setLoading(true);

  return (
    <Offcanvas show={isOpen} onHide={closeCart} placement="end" className="w-33">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Cart</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        {isLoading ? (
          <p>loading</p>
        ) : (
          <Stack gap={3}>
            {cartItems.map((item) => (
              <CartItem key={item.id} {...item} />
            ))}
            <div className="ms-auto fw-bold fs-5">
              Total:{" "}
              {
                formatCurrency(cartItems.reduce((total, cartItem) => {
                  const item = productsList.find((i) => i.id === cartItem.id);
                  return total + (item?.price || 0) * cartItem.quantity;
                }, 0))
              }
            </div>
          </Stack>
        )}

        <Button
          variant="primary"
          disabled={isLoading}
          onClick={!isLoading ? handleClick : null}
        >
          {isLoading ? "Loading…" : "Order"}
        </Button>
      </Offcanvas.Body>
    </Offcanvas>
  );
}