import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface TransportState {
  '/play': boolean;
  '/record': boolean;
  '/pause': boolean;
  '/repeat': boolean;
}

const initialState: TransportState = {
  '/play': false,
  '/record': false,
  '/pause': false,
  '/repeat': false,
};

export const transportSlice = createSlice({
  name: 'transport',
  initialState,
  reducers: {
    setTransport: (
      state,
      action: PayloadAction<{ address: string; data: number[] }>
    ) => {
      state[action.payload.address] =
        action.payload.data[0] === 1 ? true : false;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setTransport } = transportSlice.actions;

export default transportSlice.reducer;
