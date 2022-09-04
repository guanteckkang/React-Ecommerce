// import bootstrap
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
// import css
import "./style.css";

// import components
import Headbar from "./components/navbar";
import Product from "./components/product";
import Cart from "./components/cart";
import Checkout from "./components/checkout";
// import usestate
import { useState } from "react";

export default function App() {
  const [cart, setCart] = useState([]);
  return (
    <div className="App">
      <Headbar />
      <div id="tabdiv">
        <Tabs
          defaultActiveKey="product"
          id="uncontrolled-tab-example"
          className="mb-3"
        >
          <Tab eventKey="product" title="Product">
            <h1>List of Products</h1>
            <Product cart={cart} setCart={setCart} />
          </Tab>
          <Tab eventKey="cart" title={"Cart " + `${cart.length}`}>
            <h1>List of Carts</h1>
            <Cart cart={cart} setCart={setCart} />
          </Tab>
          <Tab eventKey="checkout" title="Checkout">
            <h1>Checkout:</h1>
            <Checkout cart={cart} />
          </Tab>
        </Tabs>
      </div>
    </div>
  );
}
