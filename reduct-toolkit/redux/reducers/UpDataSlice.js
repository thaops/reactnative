
import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import { API } from '../../../API';

export const CapNhatNguoiDung = createAsyncThunk('user/upData', async data => {
  const response = await fetch(
    `${API}/users/api/edit/${data._id}`,
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
  }else{
    return await response.json();
  }
  
});

export const upDataSlice = createSlice({
  name: 'upData',
  initialState: {
    upDataData: {},
    upDataStatus: 'idle',
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(CapNhatNguoiDung.pending, (state, action) => {
        state.upDataStatus = 'loading';
      })
      .addCase(CapNhatNguoiDung.fulfilled, (state, action) => {
        state.upDataStatus = 'succeeded';
        state.upDataData = action.payload;
      })
      .addCase(CapNhatNguoiDung.rejected, (state, action) => {
        state.upDataStatus = 'failed';
        console.log(action.error.message);
      });
  },
});

export default upDataSlice.reducer;