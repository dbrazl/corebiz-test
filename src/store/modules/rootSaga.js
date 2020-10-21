import { all } from 'redux-saga/effects';

import products from './products/saga';
import newsletter from './newsletter/saga';

export default function* rootSaga() {
  return yield all([products, newsletter]);
}
