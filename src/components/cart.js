import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";

import { useEffect } from "react";
export default function Cart({ cart, setCart }) {
  useEffect(() => {});
  const items = cart.map((i, index) => (
    <tr key={i.id}>
      <td>{index + 1}</td>
      <td>
        <img id="productimg" src={i.img} alt="product picture" /> {i.name}
      </td>
      <td>{i.price}</td>
      <td>{i.quantity}</td>
      <td>{i.sum}</td>
      <td>
        <Button variant="danger">
          <i className="bi bi-x-lg"></i>
        </Button>
      </td>
    </tr>
  ));
  return (
    <div id="cartlist">
      <Table bordered hover size="sm">
        <thead>
          <tr>
            <th>No.</th>
            <th>Items.</th>
            <th>Unit Price (Rm)</th>
            <th>Quantity </th>
            <th>Total (Rm)</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>{items}</tbody>
      </Table>
    </div>
  );
}
function ProductButton({ list, cart, setCart }) {
  function plus() {
    console.log("123");
    let filter = cart.find((e) => e.id == list.id);
    if (filter === undefined) {
      setCart((e) => [
        ...e,
        {
          id: list.id,
          img: list.img,
          name: list.name,
          quantity: 1,
          price: list.pricetag,
          sum: list.pricetag,
        },
      ]);
    } else {
      var result = cart.map((e) =>
        e.id == list.id
          ? {
              ...e,
              quantity: filter.quantity + 1,
              sum: filter.sum + list.pricetag,
            }
          : e
      );
      setCart(result);
    }
  }

  function minus() {
    let filter = cart.find((e) => e.id == list.id);
    if (cart.quantity === undefined) return;
    if (cart.quantity >= 1) {
      var result = cart.map((e) =>
        e.id == list.id
          ? {
              ...e,
              quantity: filter.quantity - 1,
              sum: filter.sum - list.pricetag,
            }
          : e
      );
      setCart(result);
    }
  }
  return (
    <>
      <Button onClick={minus} variant="primary">
        <i className="bi bi-dash-lg"></i>
      </Button>
      <Button className="quantity" variant="primary" disabled>
        {cart.quantity === undefined ? 0 : cart.quantity}
      </Button>
      <Button onClick={plus} variant="primary">
        <i className="bi bi-plus-lg"></i>
      </Button>
    </>
  );
}
