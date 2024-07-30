import { useContext } from "react";
import CartContext from "../store/CartContext";

import logoImg from "../assets/logo.jpg";
import Button from "./UI/Button";

export default function Header() {
  const { items } = useContext(CartContext);
  const totalCartItems = items.reduce((totalItems, item) => {
    return totalItems + item.quantity;
  }, 0);
  return (
    <header id="main-header">
      <div id="title">
        <img src={logoImg} alt="A Restaurant" />
        <h1>ReactFood</h1>
      </div>
      <nav>
        <Button textOnly>Cart ({totalCartItems})</Button>
      </nav>
    </header>
  );
}
