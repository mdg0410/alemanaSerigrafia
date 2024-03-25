import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const shoppingCardSlice = createSlice({
  name: "shoppingCard",
  initialState,
  reducers: {
    addItemToCard(state, action) {
      const newItem = action.payload;

      const existingItem = state.items.find(item => item.product === newItem.product);
      if (!existingItem) {
        state.items.push(newItem);
      } else {
        existingItem.count = newItem.count;
      }
      
    },
    removeItemFromCard(state, action) {
      const product = action.payload;
      state.items = state.items.filter((item) => item.product !== product);
    },

    clearAllItemsFromCard(state) {
      state.items = [];
    },

    updateItemCount(state, action) {
      const { product, count } = action.payload;
      const existingItem = state.items.find(item => item.product === product);
      if (existingItem) {
        existingItem.count = count;
      }
    },

    setProctuctsToWhastApp(state) {
      const products = state.items.map((item) => {
        return `${item.description} ${item.option} x ${item.count} = ${item.price * item.count}`;
      });
      const total = state.items.reduce((acc, item) => acc + item.price * item.count, 0);
      const message = `Hola, me gustaría ordenar lo siguiente: \n\n${products.join("\n\n")} \n\nTotal: *${total}*`;
      window.open(`https://wa.me/593983494090?text=${encodeURIComponent(message)}`, "_blank");
    }

  },
});

export const { addItemToCard, removeItemFromCard, clearAllItemsFromCard, updateItemCount, setProctuctsToWhastApp } = shoppingCardSlice.actions;
export const selectShoppingCard = (state) => state.shoppingCard;
export default shoppingCardSlice.reducer;