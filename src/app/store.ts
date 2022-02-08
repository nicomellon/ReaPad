import { configureStore } from '@reduxjs/toolkit';
import transportReducer from '../features/transport/transportSlice';

export const store = configureStore({
  reducer: {
    transport: transportReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
