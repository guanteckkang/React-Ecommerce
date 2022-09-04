// main database
import { itemlist } from "./data";
// import bootstrap
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
// import useeffect
import { useEffect, useState } from "react";

export default function Product({ cart, setCart }) {
  useEffect(() => {
    <ProductButton />;
    console.table(cart);
  });
  const items = itemlist.map((i, index) => (
    <Card id="cardid" key={index}>
      <Card.Img variant="top" src={i.img} />
      <Card.Body>
        <Card.Title>{i.name}</Card.Title>
        <Card.Text>{i.description}</Card.Text>
        <Card.Text>RM {i.price}</Card.Text>
        <ProductButton list={i} cart={cart} setCart={setCart} />
      </Card.Body>
    </Card>
  ));
  return <div id="cardlist">{items}</div>;
}

function ProductButton({ list, cart, setCart }) {
  const [count, setCount] = useState(0);

  // function plus
  function plus() {
    setCount(count + 1);
    let filter = cart.find((e) => e.id === list.id);
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
        e.id === list.id
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
  // function minus
  function minus() {
    if (count === 0) return;
    if (count >= 1) {
      setCount(count - 1);
      let filter = cart.find((e) => e.id === list.id);
      var result = cart.map((e) =>
        e.id === list.id
          ? {
              ...e,
              quantity: filter.quantity - 1,
              sum: filter.sum - list.pricetag,
            }
          : e
      );
    }
    var filter = result.filter((e) => e.quantity > 0);
    setCart(filter);
  }
  return (
    <>
      <Button onClick={minus} variant="primary">
        <i className="bi bi-dash-lg"></i>
      </Button>
      <Button className="quantity" variant="primary" disabled>
        {count}
      </Button>
      <Button onClick={plus} variant="primary">
        <i className="bi bi-plus-lg"></i>
      </Button>
    </>
  );
}
