import { Injectable } from '@angular/core';
import { CounterStore } from './counter.store';

@Injectable({
  providedIn: 'root'
})
export class CounterUsecase {
  constructor(private store: CounterStore) {}

  increment(): void {
    this.store.increment();
  }

  decrement(): void {
    this.store.decrement();
  }
}
