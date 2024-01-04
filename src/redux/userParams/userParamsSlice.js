import { createSlice } from '@reduxjs/toolkit';
import {
    setParamsThunk,
} from './operations';

const initialState = {
  isLoading: false,
  error: null,
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
      // -----------Get Params-------------
    //   .addCase(loginThunk.pending, (state) => {
    //     state.isLoading = true;
    //     state.error = null;
    //   })
    //   .addCase(loginThunk.fulfilled, (state, action) => {
    //     state.isLoading = false;
    //     state.isAuthentificated = true;
    //     state.token = action.payload.token;
    //     state.userData = action.payload.userData;
    //   })
    //   .addCase(loginThunk.rejected, (state, action) => {
    //     state.isLoading = false;
    //     state.error = action.payload;
    //   })
});

export const userParamsReducer = userParamsSlice.reducer;