import { SIGNUP, SETLOADING, SETERROR, RESETERROR } from './constants';

export function doSignUp(payload) {
  return {
    type: SIGNUP,
    payload,
  };
}

export function setLoading(payload) {
  return {
    type: SETLOADING,
    payload,
  };
}

export function setError(payload) {
  return {
    type: SETERROR,
    payload,
  };
}

export function setResetError() {
  return {
    type: RESETERROR,
  };
}
