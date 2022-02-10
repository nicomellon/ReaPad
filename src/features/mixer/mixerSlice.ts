import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface MixerState {
  master: {
    '/master/volume': number;
    '/master/pan': number;
    '/master/vu': number;
    '/master/vu/L': number;
    '/master/vu/R': number;
  };
}

const initialState: MixerState = {
  master: {
    '/master/volume': 0.716,
    '/master/pan': 0.5,
    '/master/vu': 0,
    '/master/vu/L': 0,
    '/master/vu/R': 0,
  },
};

export const mixerSlice = createSlice({
  name: 'mixer',
  initialState,
  reducers: {
    setMaster: (
      state,
      action: PayloadAction<{ address: string; data: number[] }>
    ) => {
      console.log(state);
      state.master[action.payload.address] = action.payload.data[0];
    },
  },
});

export const { setMaster } = mixerSlice.actions;

export default mixerSlice.reducer;
