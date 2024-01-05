import { createSlice } from '@reduxjs/toolkit';
import {
    setParamsThunk,
    getAllParamsThunk
} from './operations';

const initialState = {
  isLoading: false,
  error: null,
  userParams: []
};

const userParamsSlice = createSlice({
  name: 'auth',
  initialState,

  extraReducers: (builder) =>
    builder
      // -----------Set Params-------------
      .addCase(setParamsThunk.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(setParamsThunk.fulfilled, (state, action) => {
        state.isLoading = false;
      })
      .addCase(setParamsThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
    //   -----------Get All Params-------------
      .addCase(getAllParamsThunk.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getAllParamsThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.userParams = action.payload;
      })
      .addCase(getAllParamsThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
});

export const userParamsReducer = userParamsSlice.reducer;