
import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import { API } from '../../../API';

export const TimSanPham = createAsyncThunk('api/get/product', async data => {
  const response = await fetch(
    `${API}/api/get/product`,
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

export const SearchSlice = createSlice({
  name: 'Search',
  initialState: {
   SearchData: {},
   SearchStatus: 'idle',
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(TimSanPham.pending, (state, action) => {
        state.SearchStatus = 'loading';
      })
      .addCase(TimSanPham.fulfilled, (state, action) => {
        state.SearchStatus = 'succeeded';
        state.SearchData = action.payload;
      })
      .addCase(TimSanPham.rejected, (state, action) => {
        state.SearchStatus = 'failed';
        console.log(action.error.message);
      });
  },
});

export default SearchSlice.reducer;