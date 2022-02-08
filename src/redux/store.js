import { configureStore } from '@reduxjs/toolkit';
import transportReducer from './transportSlice';

const store = configureStore({
  reducer: {
    transport: transportReducer,
  },
});

export default store;
