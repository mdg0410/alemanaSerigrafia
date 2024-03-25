import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isOpen: false,
}

const navbarSlice = createSlice({
  name: 'navbar',
  initialState,
  reducers: {
    toggleNavbar: (state) => {
      state.isOpen = !state.isOpen
    },
  },
})

export const { toggleNavbar } = navbarSlice.actions

export const selectNavbar = state => state.navbar

export default navbarSlice.reducer