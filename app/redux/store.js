import { configureStore } from '@reduxjs/toolkit';
import menuRdeucer from './reducers/menu';



let store = configureStore({
  reducer: {
    selected_menu: menuRdeucer
  }

})


export default store;