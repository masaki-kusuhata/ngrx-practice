import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { tap } from 'rxjs/operators';

import { increment, decrement } from '../actions';

@Injectable()
export class CounterEffects {
  constructor(private actions$: Actions) {}

  @Effect({ dispatch: false })
  logger$ = this.actions$.pipe(
    ofType(increment, decrement),
    tap(action => {
      console.log(action);
    })
  );
}
