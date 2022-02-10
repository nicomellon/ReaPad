import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type Track = {};

interface MixerState {
  master: {
    '/master/volume': number;
    '/master/pan': number;
    '/master/vu': number;
    '/master/vu/L': number;
    '/master/vu/R': number;
  };
  tracks: any[any];
}

const initialState: MixerState = {
  master: {
    '/master/volume': 0.716,
    '/master/pan': 0.5,
    '/master/vu': 0,
    '/master/vu/L': 0,
    '/master/vu/R': 0,
  },
  tracks: {
    1: {
      '/track/1/volume': 0.716,
      '/track/1/pan': 0.5,
      '/track/1/vu': 0,
      '/track/1/vu/L': 0,
      '/track/1/vu/R': 0,
    },
    2: {
      '/track/2/volume': 0.716,
      '/track/2/pan': 0.5,
      '/track/2/vu': 0,
      '/track/2/vu/L': 0,
      '/track/2/vu/R': 0,
    },
    3: {
      '/track/3/volume': 0.716,
      '/track/3/pan': 0.5,
      '/track/3/vu': 0,
      '/track/3/vu/L': 0,
      '/track/3/vu/R': 0,
    },
    4: {
      '/track/4/volume': 0.716,
      '/track/4/pan': 0.5,
      '/track/4/vu': 0,
      '/track/4/vu/L': 0,
      '/track/4/vu/R': 0,
    },
    5: {
      '/track/5/volume': 0.716,
      '/track/5/pan': 0.5,
      '/track/5/vu': 0,
      '/track/5/vu/L': 0,
      '/track/5/vu/R': 0,
    },
    6: {
      '/track/6/volume': 0.716,
      '/track/6/pan': 0.5,
      '/track/6/vu': 0,
      '/track/6/vu/L': 0,
      '/track/6/vu/R': 0,
    },
    7: {
      '/track/7/volume': 0.716,
      '/track/7/pan': 0.5,
      '/track/7/vu': 0,
      '/track/7/vu/L': 0,
      '/track/7/vu/R': 0,
    },
    8: {
      '/track/8/volume': 0.716,
      '/track/8/pan': 0.5,
      '/track/8/vu': 0,
      '/track/8/vu/L': 0,
      '/track/8/vu/R': 0,
    },
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
      state.master[action.payload.address] = action.payload.data[0];
    },
    setTrack: (
      state,
      action: PayloadAction<{ address: string; data: number[] }>
    ) => {
      state.tracks[action.payload.data[0]][action.payload.address] =
        action.payload.data[1];
    },
  },
});

export const { setMaster, setTrack } = mixerSlice.actions;

export default mixerSlice.reducer;
