import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  product: [],
  cart: [],
};

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addProduct: (state, { payload }) => {
      state.product = payload;
    },

    addToCart: (
      state: {
        product: never[];
        cart: { qty: 0 }[];
      },
      { payload }
    ) => {
      const check: any = state.cart.findIndex(
        (el: any) => el.id === payload.id
      );
      if (check < 0) {
        state.cart.push({ ...payload, qty: 1 });
      }
    },
    // addItems: (
    //   state: {
    //     product: never[];
    //     cart: { qty: 0 }[];
    //   },
    //   { payload }
    // ) => {
    //   const check = state.cart.findIndex((el: any) => {
    //     return el.id === payload;
    //   });
    //   state.cart[check].qty += 1;
    // },

    removeFromCart: (state, { payload }) => {
      const newCart = state.cart.filter((el: any) => {
        return el.id !== payload.id;
      });
      state.cart = newCart;
    },
  },
});

export const { addProduct, addToCart, removeFromCart } = userSlice.actions;

export default userSlice.reducer;
