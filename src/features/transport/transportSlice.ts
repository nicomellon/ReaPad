import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface TransportState {
  playing: boolean;
  recording: boolean;
  paused: boolean;
  repeat: boolean;
}

const initialState: TransportState = {
  playing: false,
  recording: false,
  paused: false,
  repeat: false,
};

export const transportSlice = createSlice({
  name: 'transport',
  initialState,
  reducers: {
    setPlaying: (state, action) => {
      state.playing = action.payload[0] === 1 ? true : false;
    },
    setRecording: (state, action) => {
      state.recording = action.payload[0] === 1 ? true : false;
    },
    setPaused: (state, action) => {
      state.paused = action.payload[0] === 1 ? true : false;
    },
    setRepeat: (state, action) => {
      state.repeat = action.payload[0] === 1 ? true : false;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setPlaying, setPaused, setRecording, setRepeat } =
  transportSlice.actions;

export default transportSlice.reducer;
