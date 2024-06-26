
import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';


export const DangKyTaiKhoanThi = createAsyncThunk('user/thi', async data => {
  const response = await fetch(
    `https://apis.tridinhne.click/cro102/eRegister.php`,
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

export const registerThiSlice = createSlice({
  name: 'registerThiThi',
  initialState: {
    registerThiData: {},
    registerThiStatus: 'idle',
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(DangKyTaiKhoanThi.pending, (state, action) => {
        state.registerThiStatus = 'loading';
      })
      .addCase(DangKyTaiKhoanThi.fulfilled, (state, action) => {
        state.registerThiStatus = 'succeeded';
        state.registerThiData = action.payload;
      })
      .addCase(DangKyTaiKhoanThi.rejected, (state, action) => {
        state.registerThiStatus = 'failed';
        console.log(action.error.message);
      });
  },
});

export default registerThiSlice.reducer;