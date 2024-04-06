
import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import { API } from '../../../API';

export const XoaTheoMuc = createAsyncThunk('DeleteManyCart', async data => {
  const response = await fetch(
    `${API}/cart/api/delete/`,
    {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }
  );
  if (!response.ok) {
    console.log('data',data)
    throw new Error('Failed');
    
  }
  return await response.json();
});

export const DeleteManyCartSlice = createSlice({
  name: 'DeleteManyCart',
  initialState: {
    DeleteManyCartData: {},
    DeleteManyCartStatus: 'idle',
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(XoaTheoMuc.pending, (state, action) => {
        state.DeleteManyCartStatus = 'loading';
      })
      .addCase(XoaTheoMuc.fulfilled, (state, action) => {
        state.DeleteManyCartStatus = 'succeeded';
        state.DeleteManyCartData = action.payload;
      })
      .addCase(XoaTheoMuc.rejected, (state, action) => {
        state.DeleteManyCartStatus = 'failed';
        console.log(action.error.message);
      });
  },
});

export default DeleteManyCartSlice.reducer;