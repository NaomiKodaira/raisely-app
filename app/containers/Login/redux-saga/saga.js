import { takeLatest, call, put } from 'redux-saga/effects';
import { push } from 'react-router-redux';
import { SIGNUP, SETLOADING } from './constants';
import api from '../../../api';
import { doSaveUser, doSaveSignUp } from '../../App/redux-saga/actions';
import { setLoading, setError, setResetError } from './actions';
import { bakeCookie } from '../../../utils/cookieHandler';

export default function* LoginSaga() {
  yield takeLatest(SIGNUP, signUp);
  yield takeLatest(SETLOADING, resetErrors);
}

export function* signUp({ payload }) {
  yield put(setLoading({ loading: true }));
  try {
    const res = yield call(api.postSignUp, payload);
    yield put(doSaveUser({ user: res.data }));
    yield put(doSaveSignUp({ signUp: res.message }));
    bakeCookie('usrtkn', res.token);
    yield put(setLoading({ loading: false }));
    yield put(push('/'));
  } catch (e) {
    yield put(setError({ error: e }));
    yield put(setLoading({ loading: false }));
  }
}

export function* resetErrors({ payload }) {
  if (payload.loading === true) {
    yield put(setResetError());
  }
}
