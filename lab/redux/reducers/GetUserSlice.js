
import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import { API } from '../../../API';

export const LayThongTinNguoiDUng = createAsyncThunk('user/getUser', async data => {
  const response = await fetch(
    `${API}/users/api/edit/`+data,
  );
  if (!response.ok) {
    throw new Error('Failed');
  }else{
    return await response.json();
  }
  
});

export const getUserSlice = createSlice({
  name: 'getUser',
  initialState: {
    getUserData: {},
    getUserStatus: 'idle',
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(LayThongTinNguoiDUng.pending, (state, action) => {
        state.getUserStatus = 'loading';
      })
      .addCase(LayThongTinNguoiDUng.fulfilled, (state, action) => {
        state.getUserStatus = 'succeeded';
        state.getUserData = action.payload;
      })
      .addCase(LayThongTinNguoiDUng.rejected, (state, action) => {
        state.getUserStatus = 'failed';
        console.log(action.error.message);
      });
  },
});

export default getUserSlice.reducer;