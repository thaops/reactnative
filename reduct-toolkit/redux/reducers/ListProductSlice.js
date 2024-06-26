
import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import { API } from '../../../API';

export const LaySanPham = createAsyncThunk('api/mucProduct', async data => {
  const response = await fetch(
    `${API}/cate/mucProduct/`+data,
  );
  if (!response.ok) {
    throw new Error('Failed');
  }
  return await response.json();
});

export const ListProductSlice = createSlice({
  name: 'ListProduct',
  initialState: {
   ListProductData: {},
   ListProductStatus: 'idle',
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(LaySanPham.pending, (state, action) => {
        state.ListProductStatus = 'loading';
      })
      .addCase(LaySanPham.fulfilled, (state, action) => {
        state.ListProductStatus = 'succeeded';
        state.ListProductData = action.payload;
      })
      .addCase(LaySanPham.rejected, (state, action) => {
        state.ListProductStatus = 'failed';
        console.log(action.error.message);
      });
  },
});

export default ListProductSlice.reducer;