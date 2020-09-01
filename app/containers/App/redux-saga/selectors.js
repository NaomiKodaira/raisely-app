import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectAppDomain = state => (state && state.app) || initialState;
const selectAppUser = state => selectAppDomain(state).user;
const selectAppSignUp = state => selectAppDomain(state).signUp;

const makeSelectLeadInfo = () =>
  createSelector(
    selectAppDomain,
    current => current,
  );

export default makeSelectLeadInfo;
export { selectAppDomain, selectAppUser, selectAppSignUp };
