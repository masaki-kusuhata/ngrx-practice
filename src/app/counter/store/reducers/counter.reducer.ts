import { State, initialState } from '../states/counter.state';
import { increment, decrement } from '../actions/counter.action';
import { on, Action, createReducer } from '@ngrx/store';

const counterReducer = createReducer(
  initialState,
  on(increment, state => {
    return { ...state, count: state.count + 1 };
  }),
  on(decrement, state => {
    return { ...state, count: state.count - 1 };
  })
);

export function reducer(state: State, action: Action) {
  return counterReducer(state, action);
}
