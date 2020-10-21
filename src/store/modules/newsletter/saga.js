import { takeLatest, all, put, call, race } from 'redux-saga/effects';
import api from '~/services/api';

import {
  subscribeNewsletterSuccess,
  newsletterOperationFailure,
} from './actions';

import timer from '../utils/timer';

function* subscribe({ payload }) {
  try {
    const { body } = payload;

    yield race({
      response: call(api.post, '/v1/newsletter', body),
      timeout: call(timer),
    });

    yield put(subscribeNewsletterSuccess());
  } catch (error) {
    console.tron.log(error);
    yield put(newsletterOperationFailure());
  }
}

export default all([
  takeLatest('@newsletters/SUBSCRIBE_NEWSLETTER_REQUEST', subscribe),
]);
