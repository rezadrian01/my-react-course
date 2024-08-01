import { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";

import { uiActions } from "./store/ui-slice";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import Notification from "./components/UI/Notification";

let isInitial = true;

function App() {
  const dispatch = useDispatch();
  const isVisible = useSelector((state) => state.ui.cartIsVisible);
  const cart = useSelector((state) => state.cart);
  const notification = useSelector((state) => state.ui.notification);
  useEffect(() => {
    const sendCartData = async () => {
      dispatch(
        uiActions.showNotification({
          status: "pending",
          title: "Sending...",
          message: "Sending Cart Data",
        })
      );
      const response = await fetch(
        "https://react-course-redux-f5f19-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json",
        {
          method: "PUT",
          body: JSON.stringify(cart),
        }
      );
      if (!response.ok) {
        throw new Error();
      }
      const resData = await response.json();
      dispatch(
        uiActions.showNotification({
          status: "success",
          title: "Success",
          message: "Send cart data successfully",
        })
      );
      return resData;
    };

    if (isInitial) {
      isInitial = false;
      return;
    }

    sendCartData().catch((err) => {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error",
          message: "Send cart data failed",
        })
      );
    });
  }, [cart, dispatch]);
  return (
    <>
      {notification && (
        <Notification
          title={notification.title}
          status={notification.status}
          message={notification.message}
        />
      )}
      <Layout>
        {isVisible && <Cart />}
        <Products />
      </Layout>
    </>
  );
}

export default App;
