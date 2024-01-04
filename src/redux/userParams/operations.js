import { createAsyncThunk } from '@reduxjs/toolkit';
import { $instance } from '../auth/operations';


export const setParamsThunk = createAsyncThunk(
  'user/params',
  async (userData, thunkApi) => {
    try {
      const { data } = await $instance.post('/user/params', userData);

      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  },
);


