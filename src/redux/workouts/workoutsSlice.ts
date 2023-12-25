import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoading: false,
  favoriteWorkouts: [],
  error: null,
};

const workoutsSlice = createSlice({
  name: "cars",
  initialState,
  reducers: {
    setFavoriteWorkouts: (state, action) => {
      state.favoriteWorkouts.push(action.payload);
    },
    removeFromFavoriteWorkouts: (state, action) => {
      state.favoriteWorkouts = state.favoriteWorkouts.filter(
        (workout) => workout.id !== action.payload
      );
    },
  },

//   extraReducers: (builder) =>
//     builder
//       // -----------GET CARS-------------
//       .addCase(getCarsThunk.pending, (state, action) => {
//         state.isLoading = true;
//       })
//       .addCase(getCarsThunk.fulfilled, (state, action) => {
//         state.isLoading = false;
//         state.allCars = action.payload;
//       })
//       .addCase(getCarsThunk.rejected, (state, action) => {
//         state.isLoading = false;
//         state.error = action.payload;
//       }),
});

export const { setFavoriteWorkouts, removeFromFavoriteWorkouts } = workoutsSlice.actions;


export const workoutsReducer = workoutsSlice.reducer;