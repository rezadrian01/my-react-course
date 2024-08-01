import { createSlice } from "@reduxjs/toolkit";
import { uiActions } from "./ui-slice";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalQuantity: 0,
  },
  reducers: {
    addItemToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      state.totalQuantity++;
      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          title: newItem.title,
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice = existingItem.totalPrice + existingItem.price;
      }
    },
    removeItemFromCart(state, action) {
      const existingItem = state.items.find((item) => {
        return item.id === action.payload;
      });
      state.totalQuantity--;
      if (existingItem.quantity > 1) {
        existingItem.quantity--;
      } else {
        state.items = state.items.filter((item) => item.id !== action.payload);
      }
    },
  },
});

export const sendCartData = (cart) => {
  return async (dispatch) => {
    dispatch(
      uiActions.showNotification({
        status: "pending",
        title: "Sending...",
        message: "Sending Cart Data",
      })
    );
    const sendRequest = async () => {
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
    };

    try {
      await sendRequest();
      dispatch(
        uiActions.showNotification({
          status: "success",
          title: "Success",
          message: "Send cart data successfully",
        })
      );
    } catch (err) {
      sendCartData().catch((err) => {
        dispatch(
          uiActions.showNotification({
            status: "error",
            title: "Error",
            message: "Send cart data failed",
          })
        );
      });
    }
  };
};

export const cartActions = cartSlice.actions;
export default cartSlice;
