import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
   addItem: (state, action) => {
  const { name, image, cost } = action.payload;
  const existingItem = state.items.find(item => item.name === name);
  if (existingItem) {
    existingItem.quantity++;
  } else {
    state.items.push({ name, image, cost, quantity: 1 });
  }
},
    removeItem: (state, action) => {
           state.items =  state.items.filter((item)=>{
           return item.name !== action.payload.name;
      })
    },
    updateQuantity: (state, action) => {
      state.items.map((item)=>{
        if(item.name == action.payload.name){
          item.quantity +=1;
        }
      })
    
    },
     decreaseQuantity: (state, action) => {
      const { name, image, cost } = action.payload;
      const existingItem = state.items.find(item => item.name === name);
      if (existingItem.quantity>1) {
        existingItem.quantity--;
     }
    },
  },
});

export const { addItem, removeItem, updateQuantity, decreaseQuantity } = CartSlice.actions;

export default CartSlice.reducer;
