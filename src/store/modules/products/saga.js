import { all, takeLatest, put, call, race } from 'redux-saga/effects';
import api from '~/services/api';

import { indexProductsSuccess, productsOperationFailure } from './actions';

import timer from '../utils/timer';

function* indexProducts() {
  try {
    const { response } = yield race({
      response: call(api.get, '/v1/products'),
      timeout: call(timer),
    });

    yield put(indexProductsSuccess(response.data));
  } catch (error) {
    yield put(productsOperationFailure());
  }
}

export default all([
  takeLatest('@products/INDEX_PRODUCTS_REQUEST', indexProducts),
]);
