import Button from "react-bootstrap/Button";
export default function Checkout({ cart }) {
  let payment = cart.map((x) => x.sum).reduce((x, y) => x + y, 0) || 0;
  let total = cart.map((x) => x.quantity).reduce((x, y) => x + y, 0) || 0;

  function alertsum() {
    alert("The total is: Rm " + payment + ".00\nThank you for your purchased");
  }
  return (
    <div>
      <h1>Total: {total} items</h1>
      <h1>Total sum: Rm {payment}</h1>
      <Button onClick={alertsum}>Checkout</Button>
    </div>
  );
}
