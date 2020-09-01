import produce from 'immer';
import { SAVEUSER, SAVESIGNUP } from './constants';

export const initialState = {
  user: {},
  message: '',
};

/* eslint-disable default-case, no-param-reassign, no-case-declarations */
const leadInfoPageReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case SAVEUSER:
        const { user } = action.payload;
        draft.user = user;
        break;
      case SAVESIGNUP:
        const { signUp } = action.payload;
        draft.signUp = signUp;
        break;
    }
  });

export default leadInfoPageReducer;
