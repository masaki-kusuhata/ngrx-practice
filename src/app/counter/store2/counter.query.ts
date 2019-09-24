import { Injectable } from '@angular/core';
import { CounterStore } from './counter.store';
import { Observable } from 'rxjs';
import { Counter } from './counter.state';

@Injectable({
  providedIn: 'root'
})
export class CounterQuery {
  count$: Observable<Readonly<Counter>>;

  constructor(private store: CounterStore) {
    this.count$ = this.store.data$;
  }
}
