import { SAVEUSER, SAVESIGNUP } from './constants';

export function doSaveUser(payload) {
  return {
    type: SAVEUSER,
    payload,
  };
}

export function doSaveSignUp(payload) {
  return {
    type: SAVESIGNUP,
    payload,
  };
}
