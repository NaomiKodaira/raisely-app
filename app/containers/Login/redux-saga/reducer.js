import produce from 'immer';
import { SETLOADING, SETERROR, RESETERROR } from './constants';

export const initialState = {
  loading: false,
  error: {},
};

/* eslint-disable default-case, no-param-reassign, no-case-declarations */
const leadInfoPageReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case SETLOADING:
        const { loading } = action.payload;
        draft.loading = loading;
        break;
      case SETERROR:
        const { error } = action.payload;
        draft.error = error;
        break;
      case RESETERROR:
        draft.error = initialState.error;
        break;
    }
  });

export default leadInfoPageReducer;
