import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { CounterUsecase } from './store/usecase/counter.usecase';
import { CounterQuery } from './store/query/counter.query';

import { CounterStore } from './store2/counter.store';
import { Counter } from './store2/counter.state';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {
  count$: Observable<number>;
  count2$: Observable<Counter>;

  constructor(
    private counterUsecase: CounterUsecase,
    private counterQuery: CounterQuery,
    private counterStore: CounterStore
  ) {}

  ngOnInit() {
    this.count$ = this.counterQuery.count$;
    this.count2$ = this.counterStore.data$;
    console.log(this.counterStore.data$.pipe(map(x => x.count)));
  }

  increment() {
    this.counterUsecase.increment();
  }

  decrement() {
    this.counterUsecase.decrement();
  }

  increment2() {
    this.counterStore.increment();
  }

  decrement2() {
    this.counterStore.decrement();
  }
}
