import { configureStore } from '@reduxjs/toolkit';
import transportReducer from '../features/transport/transportSlice';
import mixerReducer from '../features/mixer/mixerSlice';

export const store = configureStore({
  reducer: {
    transport: transportReducer,
    mixer: mixerReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
