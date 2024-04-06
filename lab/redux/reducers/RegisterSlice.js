
import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import { API } from '../../../API';

export const DangKyTaiKhoan = createAsyncThunk('user/register', async data => {
  const response = await fetch(
    `${API}/users/register`,
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

export const registerSlice = createSlice({
  name: 'register',
  initialState: {
    registerData: {},
    registerStatus: 'idle',
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(DangKyTaiKhoan.pending, (state, action) => {
        state.registerStatus = 'loading';
      })
      .addCase(DangKyTaiKhoan.fulfilled, (state, action) => {
        state.registerStatus = 'succeeded';
        state.registerData = action.payload;
      })
      .addCase(DangKyTaiKhoan.rejected, (state, action) => {
        state.registerStatus = 'failed';
        console.log(action.error.message);
      });
  },
});

export default registerSlice.reducer;