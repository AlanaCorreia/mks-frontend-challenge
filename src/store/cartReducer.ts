/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice } from '@reduxjs/toolkit';

type IState = {
  cart: any[];
}

const initialState: IState = {
  cart: []
};

const cartSlice = createSlice({
  name: 'cartReducer',
  initialState,
  reducers: {
    addToCart(state, action) {
      const { id } = action.payload;

      const productExists = state.cart.some((product) => product.id === id);
      
      if (productExists) {
        const productUpdate = state.cart.find((product) => product.id === id);
        
        productUpdate.quantity += 1;
      } else {
        state.cart.push(action.payload);
      }
    },
    removeToCart(state, action) {     
      const filteredState = state.cart.filter(({id}) => id !== action.payload.id);
      
      state.cart = filteredState;
    },
    incrementCart(state, action) {
      const { id } = action.payload;
      const productExists = state.cart.find((product) => product.id === id);
      
      if (productExists) {
        productExists.quantity += 1;
      }
    },
    decrementCart(state, action) {     
      const { id } = action.payload;

      const productExists = state.cart.find((product) => product.id === id);
      
      if (productExists && productExists.quantity > 1) {
        productExists.quantity -= 1;
      } else {
        const filteredState = state.cart.filter(({id}) => id !== action.payload.id);
  
        state.cart = filteredState;
      }
    }
  },
});

export const { addToCart, removeToCart, incrementCart, decrementCart } = cartSlice.actions;

export default cartSlice.reducer;
