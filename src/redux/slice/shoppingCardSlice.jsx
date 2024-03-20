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
      state.items.push(newItem);
    },
  },
});

export const { addItemToCard } = shoppingCardSlice.actions;
export const selectShoppingCard = (state) => state.shoppingCard;
export default shoppingCardSlice.reducer;