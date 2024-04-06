
import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import { API } from '../../../API';

export const XoaGioHang = createAsyncThunk('DeleteCart', async data => {
  const response = await fetch(
    `${API}/cart/api/delete/`+data,
    {
      method: 'DELETE',
    },
  );
  if (!response.ok) {
    throw new Error('Failed');
  }
  return await response.json();
});

export const DeleteCartSlice = createSlice({
  name: 'DeleteCart',
  initialState: {
    DeleteCartData: {},
    DeleteCartStatus: 'idle',
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(XoaGioHang.pending, (state, action) => {
        state.DeleteCartStatus = 'loading';
      })
      .addCase(XoaGioHang.fulfilled, (state, action) => {
        state.DeleteCartStatus = 'succeeded';
        state.DeleteCartData = action.payload;
      })
      .addCase(XoaGioHang.rejected, (state, action) => {
        state.DeleteCartStatus = 'failed';
        console.log(action.error.message);
      });
  },
});

export default DeleteCartSlice.reducer;