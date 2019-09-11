import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import { State } from '../states/counter.state';
import * as CounterActions from '../actions/counter.action';
import { CounterStoreModule } from '../counter-state.module';

@Injectable({
  providedIn: CounterStoreModule // 'root' でもOK
})
export class CounterUsecase {
  constructor(private store: Store<State>) {}

  increment() {
    this.store.dispatch(CounterActions.increment());
  }

  decrement() {
    this.store.dispatch(CounterActions.decrement());
  }
}
