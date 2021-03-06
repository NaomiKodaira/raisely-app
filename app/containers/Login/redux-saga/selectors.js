import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectLoginDomain = state => (state && state.login) || initialState;
const selectLoginLoading = state => selectLoginDomain(state).loading;
const selectLoginError = state => selectLoginDomain(state).error;
const selectLoginErrorMessage = state =>
  selectLoginError(state).error?.response?.data?.errors[0]?.message;

const makeSelectLeadInfo = () =>
  createSelector(
    selectLoginDomain,
    current => current,
  );

export default makeSelectLeadInfo;
export {
  selectLoginDomain,
  selectLoginLoading,
  selectLoginError,
  selectLoginErrorMessage,
};
