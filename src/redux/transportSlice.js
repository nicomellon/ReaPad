import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  '/play': [0],
  '/pause': [0],
  '/record': [0],
  '/repeat': [0],
  '/frames/str': ['00:00:00:00'],
  '/samples/str': ['0'],
  '/samples': [0],
  '/beat/str': ['1.1.00'],
  '/time': [0],
  '/time/str': ['0:00.000'],
};

export const transportSlice = createSlice({
  name: 'transport',
  initialState,
  reducers: {
    setState: (state, action) => {
      state[action.payload.address] = action.payload.data;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setState } = transportSlice.actions;

export default transportSlice.reducer;
