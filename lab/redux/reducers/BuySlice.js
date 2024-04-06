
import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import { API } from '../../../API';

export const ThanhToan = createAsyncThunk('buy', async data => {
  const response = await fetch(
    `${API}/bill/api/addBill`,
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

export const buySlice = createSlice({
  name: 'buy',
  initialState: {
    buyData: {},
    buyStatus: 'idle',
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(ThanhToan.pending, (state, action) => {
        state.buyStatus = 'loading';
      })
      .addCase(ThanhToan.fulfilled, (state, action) => {
        state.buyStatus = 'succeeded';
        state.buyData = action.payload;
      })
      .addCase(ThanhToan.rejected, (state, action) => {
        state.buyStatus = 'failed';
        console.log(action.error.message);
      });
  },
});

export default buySlice.reducer;