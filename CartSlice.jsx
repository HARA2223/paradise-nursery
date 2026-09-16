import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [], // each item: { name, price, image, category, quantity }
};

export const CartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action) => {
      const { name, price, image, category } = action.payload;
      const existingItem = state.items.find((item) => item.name === name);

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ name, price, image, category, quantity: 1 });
      }
    },

    removeItem: (state, action) => {
      const nameToRemove = action.payload;
      state.items = state.items.filter((item) => item.name !== nameToRemove);
    },

    updateQuantity: (state, action) => {
      const { name, quantity } = action.payload;
      const item = state.items.find((item) => item.name === name);

      if (item) {
        item.quantity = quantity;
      }
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
