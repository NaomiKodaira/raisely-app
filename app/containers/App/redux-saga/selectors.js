import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectAppDomain = state => (state && state.app) || initialState;

const makeSelectLeadInfo = () =>
  createSelector(
    selectAppDomain,
    current => current,
  );

export default makeSelectLeadInfo;
export { selectAppDomain };
