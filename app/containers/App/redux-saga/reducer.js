import produce from 'immer';
import { SAVEUSER } from './constants';

export const initialState = {
  user: {},
};

/* eslint-disable default-case, no-param-reassign, no-case-declarations */
const leadInfoPageReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case SAVEUSER:
        const { user } = action.payload;
        draft.user = user;
        break;
    }
  });

export default leadInfoPageReducer;
