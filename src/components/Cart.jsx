import { useContext } from "react";
import Modal from "./UI/Modal";
import Button from "./UI/Button";

import CartContext from "../store/CartContext";
import UserProgressContext from "../store/UserProgressContext";
import { currencyFormatter } from "../utils/formatting";

export default function Cart({}) {
  const { items } = useContext(CartContext);
  const { userProgress, hideCart } = useContext(UserProgressContext);

  const totalPrice = items.reduce((totalItemsPrice, item) => {
    return totalItemsPrice + item.quantity * item.price;
  }, 0);
  return (
    <Modal open={userProgress === "cart"}>
      <h2>Your Cart</h2>
      <ul>
        {items.map((item) => {
          return (
            <li key={item.id}>
              {item.name} - {item.quantity}
            </li>
          );
        })}
      </ul>
      <p className="cart-total">{currencyFormatter.format(totalPrice)}</p>
      <p className="modal-actions">
        <Button onClick={hideCart} textOnly>
          Close
        </Button>
        <Button onClick={hideCart}>Go To Checkout</Button>
      </p>
    </Modal>
  );
}
