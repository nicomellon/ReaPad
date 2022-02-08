import * as actions from '../actionTypes';

const initialState = {
  data: {
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
  },
};

export default function reducer(state = initialState, action) {
  console.log(state);
  switch (action.type) {
    case actions.OSC_MSG:
      return {
        ...state,
        data: {
          ...state.data,
          [action.payload.address]: action.payload.data,
        },
      };
    default:
      return state;
  }
  // if (transportActions.includes(action.payload.address))
  // const transportActions = ['/play', '/pause', '/record', '/repeat'];
}
