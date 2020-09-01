import { takeLatest, call, put } from 'redux-saga/effects';
import { SIGNUP } from './constants';
import api from '../../../api';
import { doSaveUser } from '../../App/redux-saga/actions';
import { setLoading, setError } from './actions';

export default function* LoginSaga() {
  yield takeLatest(SIGNUP, signUp);
}

export function* signUp({ payload }) {
  yield put(setLoading({ loading: true }));
  try {
    const res = yield call(api.postSignUp, payload);
    yield put(doSaveUser({ user: res.data }));
    yield put(setLoading({ loading: false }));
  } catch (e) {
    yield put(setError({ error: e }));
    yield put(setLoading({ loading: false }));
  }
}
