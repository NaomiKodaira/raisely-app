import { SAVEUSER } from './constants';

export function doSaveUser(payload) {
  return {
    type: SAVEUSER,
    payload,
  };
}
