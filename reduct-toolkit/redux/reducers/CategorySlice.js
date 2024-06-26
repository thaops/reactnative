
import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import { API } from '../../../API';

export const LayDanhMuc = createAsyncThunk('api/get/product', async data => {
  const response = await fetch(
    `${API}/cate/get`,
  );
  if (!response.ok) {
    throw new Error('Failed');
  }
  return await response.json();
});

export const CategorySlice = createSlice({
  name: 'Category',
  initialState: {
   CategoryData: {},
   CategoryStatus: 'idle',
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(LayDanhMuc.pending, (state, action) => {
        state.CategoryStatus = 'loading';
      })
      .addCase(LayDanhMuc.fulfilled, (state, action) => {
        state.CategoryStatus = 'succeeded';
        state.CategoryData = action.payload;
      })
      .addCase(LayDanhMuc.rejected, (state, action) => {
        state.CategoryStatus = 'failed';
        console.log(action.error.message);
      });
  },
});

export default CategorySlice.reducer;