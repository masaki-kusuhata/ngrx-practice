import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';

import { State } from './counter.state';
import * as CounterSelectors from './counter.selector';
import { CounterStoreModule } from '../counter-state.module';

@Injectable({
  providedIn: CounterStoreModule // 'root' でもOK
})
export class CounterQuery {
  count$ = this.store.pipe(select(CounterSelectors.getCount));

  constructor(private store: Store<State>) {}
}
