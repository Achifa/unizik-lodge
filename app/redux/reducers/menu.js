import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  selected_menu: 'home'
}

export const menuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    
    setMenuTo: (state, action) => {
      state.selected_menu = action.payload 
    },
  },
})

// Action creators are generated for each case reducer function
export const { setMenuTo } = menuSlice.actions
export default menuSlice.reducer
