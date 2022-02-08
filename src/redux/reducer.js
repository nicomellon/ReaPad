import * as actions from './actionTypes';

const initialState = {
  transport: {
    '/play': [0],
    '/pause': [0],
    '/record': [0],
    '/repeat': [0],
    /* '/frames/str': ['00:00:00:00'],
    '/samples/str': ['0'],
    '/samples': [0],
    '/beat/str': ['1.1.00'],
    '/time': [0],
    '/time/str': ['0:00.000'], */
  },
};

const transportActions = ['/play', '/pause', '/record', '/repeat'];

export default function reducer(state = initialState, action) {
  if (
    action.type === actions.OSC_MSG &&
    transportActions.includes(action.payload.address)
  ) {
    return {
      ...state,
      transport: {
        ...state.transport,
        [action.payload.address]: action.payload.data,
      },
    };
  }
  return state;
}
