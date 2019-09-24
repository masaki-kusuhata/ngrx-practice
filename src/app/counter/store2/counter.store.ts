import { Injectable } from '@angular/core';
import { Store } from './store2';
import { Counter } from './counter.state';

@Injectable({
  providedIn: 'root'
})
export class CounterStore extends Store<Counter> {
  constructor() {
    super({count: 0});
  }

  _increment(current: Readonly<Counter>): Partial<Counter> {
    return {count: current.count + 1};
  }

  _decrement(current: Readonly<Counter>): Partial<Counter> {
    return {count: current.count - 1};
  }

  increment(): void {
    this.dispatch(this._increment);
  }

  decrement(): void {
    this.dispatch(this._decrement);
  }
}
