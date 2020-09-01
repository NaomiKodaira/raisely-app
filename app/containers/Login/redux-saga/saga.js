import { takeLatest, call } from 'redux-saga/effects';
import selectLoginDomain from './selectors';
import { SIGNUP } from './constants';
import api from '../../../api';

export default function* LoginSaga() {
  yield takeLatest(SIGNUP, signUp);
}

export function* signUp({ payload }) {
  const res = yield call(api.postSignUp, payload);
}
