import { useContext } from "react";

import CartContext from "../store/CartContext";
import UserProgressContext from "../store/UserProgressContext";

import { currencyFormatter } from "../utils/formatting";

import Modal from "./UI/Modal";
import Input from "./UI/Input";
import Button from "./UI/Button";

import useHttp from "../hooks/useHttp";
import Error from "./Error";

const requestConfig = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
};

export default function Checkout() {
  const { items, handleResetCart } = useContext(CartContext);
  const { hideCheckout, userProgress } = useContext(UserProgressContext);
  const totalPrice = items.reduce((totalPriceItems, item) => {
    return totalPriceItems + item.quantity * item.price;
  }, 0);

  const { data, error, isLoading, sendRequest, clearData } = useHttp(
    "http://localhost:3000/orders",
    requestConfig
  );

  function handleSubmit(event) {
    event.preventDefault();
    const fd = new FormData(event.target);
    const customerData = Object.fromEntries(fd.entries());
    sendRequest(
      JSON.stringify({
        order: {
          items,
          customer: customerData,
        },
      })
    );
  }

  function handleFinish() {
    hideCheckout();
    handleResetCart();
    clearData();
  }

  let actions = (
    <>
      <Button onClick={hideCheckout} type="button" textOnly>
        Close
      </Button>
      <Button>Submit Order</Button>
    </>
  );
  if (isLoading) {
    actions = <span>Sending Request...</span>;
  }

  if (data && !error) {
    return (
      <Modal
        open={userProgress === "checkout"}
        onClose={userProgress === "checkout" ? handleFinish : null}
      >
        <h2>Success!</h2>
        <p>Your order was submitted successfully</p>
        <p>
          We will get back to you with more details via email within the next
          few minutes.
        </p>
        <p className="modal-actions">
          <Button onClick={handleFinish}>Okay</Button>
        </p>
      </Modal>
    );
  }

  return (
    <Modal
      open={userProgress === "checkout"}
      onClose={userProgress === "checkout" ? hideCheckout : null}
    >
      <form onSubmit={handleSubmit}>
        <h2>Checkout</h2>
        <p>Total Amount: {currencyFormatter.format(totalPrice)}</p>
        <Input label="Full Name" type="text" id="name" />
        <Input label="E-Mail Address" type="email" id="email" />
        <Input label="Street" type="text" id="street" />
        <div className="control-row">
          <Input label="Postal Code" type="text" id="postal-code" />
          <Input label="City" type="text" id="city" />
        </div>
        {error && <Error title="Failed to submit order" content={error} />}
        <p className="modal-actions">{actions}</p>
      </form>
    </Modal>
  );
}
