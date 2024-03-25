import { configureStore } from '@reduxjs/toolkit'
import navbarReducer from './redux/slice/navbarSlice'
import shoppingReducer from './redux/slice/shoppingCardSlice'

const store = configureStore({
  reducer: {
    navbar: navbarReducer,
    shoppingCard: shoppingReducer,
  },
});

export default store