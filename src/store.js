import { configureStore } from '@reduxjs/toolkit'
import navbarReducer from './redux/slice/navbarSlice'

const store = configureStore({
  reducer: {
    navbar: navbarReducer,
  },
});

export default store