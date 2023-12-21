import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { workoutsReducer } from "./Workouts/slice";

const workoutsPersistConfig = {
  key: "workouts",
  storage,
  whitelist: ["favoriteWorkouts"],
};

export const store = configureStore({
  reducer: {
    workouts: persistReducer(workoutsPersistConfig, workoutsReducer),
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);