import React from "react";
import { Button, Table, Card } from "react-bootstrap";
import { useShoppingCart } from "../../context/ShoppingCartContext";
import { formatCurrency } from "../../utilities/FormatCurrency";

function OpenedProduct({ product }) {
  const { id, imageSource, price, description } = product;
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useShoppingCart();
  const quantity = getItemQuantity(id);

  return (
    <Card style={{ position: "relative" }}>
      <Card.Header style={{ position: "absolute", height: "3vh", top: "2vh", left: "50%", transform: "translate(-50%, -50%)", fontSize: "4vh" }}></Card.Header>
      <Card.Img variant="top" src={imageSource} style={{
        position: "absolute",
        width: "100%", height: "30vh", top: "18vh", left: "50%", transform: "translate(-50%, -50%)"
      }} />

      <Card.Text style={{ position: "absolute", width: "100%", height: "30vh", top: "50vh", left: "50%", transform: "translate(-50%, -50%)" }}>
        <Table striped bordered hover>
          <tbody style={{ textShadow: "-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black" }}>
            <tr>
              <td><p>Material:</p></td>
              <td><p>Plastic</p></td>
            </tr>

            <tr>
              <td><p>Dimensiuni:</p></td>
              <td><p>100 x 130 x 235 mm</p></td>
            </tr>
            <tr>
              <td><p>Greutate:</p></td>
              <td><p>274 g</p></td>
            </tr>
            <tr>
              <td><p>Ambalat:</p></td>
              <td><p>24 buc / carton</p></td>
            </tr>
            <tr>
              <td><p>Culoare:</p></td>
              <td><p>negru</p></td>
            </tr>
            <tr>
              <td><p>Pret:</p></td>
              <td><p>{formatCurrency(price)}</p></td>
            </tr>
          </tbody>
        </Table>
      </Card.Text>
      <Card.Text style={{ position: "absolute", width: "100%", top: "50vh", left: "50%", transform: "translate(-50%, -50%)" }}>{description}</Card.Text>
      {quantity === 0 ? (
        <Button style={{ position: "absolute", width: "100%", height: "5vh", top: "75vh", left: "50%", transform: "translate(-50%, -50%)" }} onClick={() => increaseCartQuantity(id)}>
          + Add To Cart
        </Button>
      ) : (
        <div>
          <div>
            <Button style={{ position: "absolute", width: "20%", height: "5vh", top: "75vh", left: "25%", transform: "translate(-50%, -50%)" }} onClick={() => decreaseCartQuantity(id)}>-</Button>
            <div style={{ position: "absolute", width: "20%", height: "5vh", top: "75vh", left: "50%", transform: "translate(-50%, -50%)" }} >
              <span>{quantity}</span>
            </div>
            <Button style={{ position: "absolute", width: "20%", height: "5vh", top: "75vh", left: "75%", transform: "translate(-50%, -50%)" }} onClick={() => increaseCartQuantity(id)}>+</Button>
          </div>
          <Button style={{ position: "absolute", width: "100%", height: "5vh", top: "85vh", left: "50%", transform: "translate(-50%, -50%)" }} variant="danger"
            onClick={() => removeFromCart(id)}
          >
            Remove
          </Button>
        </div>

      )}
    </Card>
  );
}
export default OpenedProduct;