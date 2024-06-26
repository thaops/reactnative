
import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import { API } from '../../../API';

export const GioHang = createAsyncThunk('user/cart', async data => {
  const response = await fetch(
    
    `${API}/cart/product/`+data,
  );
  if (!response.ok) {
    throw new Error('Failed');
  }else{
    return await response.json();
  }
  
});

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cartData: {},
    cartStatus: 'idle',
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(GioHang.pending, (state, action) => {
        state.cartStatus = 'loading';
      })
      .addCase(GioHang.fulfilled, (state, action) => {
        state.cartStatus = 'succeeded';
        state.cartData = action.payload;
      })
      .addCase(GioHang.rejected, (state, action) => {
        state.cartStatus = 'failed';
        console.log(action.error.message);
      });
  },
});

export default cartSlice.reducer;