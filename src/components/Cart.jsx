import { useContext } from "react";
import Modal from "./UI/Modal";
import Button from "./UI/Button";

import CartContext from "../store/CartContext";
import UserProgressContext from "../store/UserProgressContext";
import { currencyFormatter } from "../utils/formatting";
import CartItem from "./CartItem";

export default function Cart({}) {
  const { items, addItem, removeItem } = useContext(CartContext);
  const { userProgress, hideCart, showCheckout } =
    useContext(UserProgressContext);

  const totalPrice = items.reduce((totalItemsPrice, item) => {
    return totalItemsPrice + item.quantity * item.price;
  }, 0);
  return (
    <Modal
      open={userProgress === "cart"}
      onClose={userProgress === "cart" ? hideCart : null}
    >
      <h2>Your Cart</h2>
      <ul>
        {items.map((item) => {
          return (
            <CartItem
              key={item.id}
              name={item.name}
              quantity={item.quantity}
              price={item.price}
              onDecrease={() => removeItem(item.id)}
              onIncrease={() => addItem(item)}
            />
          );
        })}
      </ul>
      <p className="cart-total">{currencyFormatter.format(totalPrice)}</p>
      <p className="modal-actions">
        <Button onClick={hideCart} textOnly>
          Close
        </Button>
        {items.length > 0 && (
          <Button onClick={showCheckout}>Go To Checkout</Button>
        )}
      </p>
    </Modal>
  );
}
