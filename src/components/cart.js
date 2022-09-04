import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";

import { useEffect } from "react";
export default function Cart({ cart, setCart }) {
  useEffect(() => {});
  // const filter = cart.filter((e) => typeof e.id === "number");
  function erase() {
    var filter = cart.filter((e) => e.id);
    // setCart(filter);
    console.log(filter);
  }
  const items = cart.map((i, index) => (
    <tr key={i.id}>
      <td>{index + 1}</td>
      <td>
        <img id="productimg" src={i.img} alt="" /> {i.name}
      </td>
      <td>{i.price}</td>
      <td>{i.quantity}</td>
      <td>{i.sum}</td>
      <td>
        <Button onClick={erase} variant="danger">
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
