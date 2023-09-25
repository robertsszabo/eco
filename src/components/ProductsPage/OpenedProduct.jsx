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
    <Card style={{ height: "100%" }}>
      <div className="d-felx" style={{height:"50%"}}>
      <Card.Img variant="top" src={imageSource} style={{
        width: "50%",
        height: "100%"
      }} />
           <Card.Img variant="top" src={imageSource} style={{
        width: "50%",
        height: "100%"
      }} />
      </div>

      <Card.Text style={{width: "100%", height: "15%"}}>
        <Table striped bordered hover>
          <tbody style={{ textShadow: "-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black",lineHeight: "100%"}}>
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
      <Card.Text style={{width: "100%",height:"25%" }}>{description}</Card.Text>
      {quantity === 0 ? (
        <Button style={{
          width: "100%", height: "8%"}} onClick={() => increaseCartQuantity(id)}>
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