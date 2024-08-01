import { useEffect } from "react";

import { useSelector } from "react-redux";

import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";

function App() {
  const isVisible = useSelector((state) => state.ui.cartIsVisible);
  const cart = useSelector((state) => state.cart);
  useEffect(() => {
    fetch(
      "https://react-course-redux-f5f19-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json",
      {
        method: "PUT",
        body: JSON.stringify(cart),
      }
    );
  }, [cart]);
  return (
    <Layout>
      {isVisible && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
