import * as actions from '../actionTypes';

const initialState = {
  data: {},
};

export default function reducer(state = initialState, action) {
  console.log(state);
  switch (action.type) {
    case actions.OSC_MSG:
      return {
        ...state,
        mixer: {
          ...state.mixer,
          [action.payload.address]: action.payload.data,
        },
      };
    default:
      return state;
  }
}
