import { combineReducers } from 'redux';

import products from './products/reducer';
import newsletter from './newsletter/reducer';

export default combineReducers({
  products,
  newsletter,
});
