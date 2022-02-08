import { combineReducers } from 'redux';

import transport from './transport';
import mixer from './mixer';

export default combineReducers({
  transport,
  mixer,
});
