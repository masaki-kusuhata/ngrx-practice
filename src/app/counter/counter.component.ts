import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { CounterUsecase } from './store/usecases/counter.usecase';
import { CounterQuery } from './store/queries/counter.query';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {
  count$: Observable<number>;

  constructor(
    private counterUsecase: CounterUsecase,
    private counterQuery: CounterQuery
  ) {}

  ngOnInit() {
    this.count$ = this.counterQuery.count$;
  }

  increment() {
    this.counterUsecase.increment();
  }

  decrement() {
    this.counterUsecase.decrement();
  }
}
