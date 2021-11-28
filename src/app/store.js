import { configureStore } from '@reduxjs/toolkit';
import carReducer from "../features/CarSlice/carSlice"

export const store = configureStore({
  reducer: {
    car: carReducer,
  },
});
