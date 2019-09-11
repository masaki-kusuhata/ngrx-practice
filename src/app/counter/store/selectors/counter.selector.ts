import { createFeatureSelector, createSelector } from '@ngrx/store';
import { State, featureName } from '../states/counter.state';

const getState = createFeatureSelector<State>(featureName);
export const getCount = createSelector(
  getState,
  state => state.count
);
