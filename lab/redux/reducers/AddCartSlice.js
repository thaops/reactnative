
import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import { API } from '../../../API';

export const ThemGioHang = createAsyncThunk('addCart', async data => {
  const response = await fetch(
    `${API}/cart/addProduct`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    },
  );
  if (!response.ok) {
    throw new Error('Failed');
  }
  return await response.json();
});

export const AddCartSlice = createSlice({
  name: 'AddCart',
  initialState: {
    AddCartData: {},
    AddCartStatus: 'idle',
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(ThemGioHang.pending, (state, action) => {
        state.AddCartStatus = 'loading';
      })
      .addCase(ThemGioHang.fulfilled, (state, action) => {
        state.AddCartStatus = 'succeeded';
        state.AddCartData = action.payload;
      })
      .addCase(ThemGioHang.rejected, (state, action) => {
        state.AddCartStatus = 'failed';
        console.log(action.error.message);
      });
  },
});

export default AddCartSlice.reducer;