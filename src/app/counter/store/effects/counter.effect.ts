import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { tap } from 'rxjs/operators';

import { increment, decrement } from '../actions/counter.action';

@Injectable()
export class CounterEffects {
  constructor(private actions$: Actions) {}

  @Effect({ dispatch: false })
  increment$ = this.actions$.pipe(
    ofType(increment.type),
    tap(action => {
      console.log(action);
    })
  );

  @Effect({ dispatch: false })
  decrement$ = this.actions$.pipe(
    ofType(decrement.type),
    tap(action => {
      console.log(action);
    })
  );
}
