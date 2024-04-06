
import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import { API } from '../../../API';

export const GetBill = createAsyncThunk('user/bill', async data => {
  const response = await fetch(
    
    `${API}/bill/getBill/`+data,
  );
  if (!response.ok) {
    throw new Error('Failed');
  }else{
    return await response.json();
  }
  
});

export const userBillSlice = createSlice({
  name: 'userBill',
  initialState: {
    userBillData: {},
    userBillStatus: 'idle',
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(GetBill.pending, (state, action) => {
        state.userBillStatus = 'loading';
      })
      .addCase(GetBill.fulfilled, (state, action) => {
        state.userBillStatus = 'succeeded';
        state.userBillData = action.payload;
      })
      .addCase(GetBill.rejected, (state, action) => {
        state.userBillStatus = 'failed';
        console.log(action.error.message);
      });
  },
});

export default userBillSlice.reducer;