import { createFeatureSelector, createSelector } from '@ngrx/store';
import { State, featureName } from '../state/counter.state';

const getState = createFeatureSelector<State>(featureName);
export const getCount = createSelector(
  getState,
  state => state.count
);
