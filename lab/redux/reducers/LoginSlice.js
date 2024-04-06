
import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import { API } from '../../../API';

export const KiemTraDangNhap = createAsyncThunk('user/login', async data => {
  const response = await fetch(
    `${API}/users/login`,
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

export const loginSlice = createSlice({
  name: 'login',
  initialState: {
    loginData: {},
    loginStatus: 'idle',
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(KiemTraDangNhap.pending, (state, action) => {
        state.loginStatus = 'loading';
      })
      .addCase(KiemTraDangNhap.fulfilled, (state, action) => {
        state.loginStatus = 'succeeded';
        state.loginData = action.payload;
      })
      .addCase(KiemTraDangNhap.rejected, (state, action) => {
        state.loginStatus = 'failed';
        console.log(action.error.message);
      });
  },
});

export default loginSlice.reducer;