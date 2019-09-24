import { BehaviorSubject, Observable } from 'rxjs';

export type Action<T> = (current: Readonly<T>) => Partial<T>;

export class Store<T> {
  private data: BehaviorSubject<Readonly<T>>;
  public data$: Observable<Readonly<T>>;

  constructor(initialData: T) {
    this.data = new BehaviorSubject(initialData as Readonly<T>);
    this.data$ = this.data.asObservable();
  }

  protected current(): Readonly<T>{
    return this.data.getValue();
  }

  protected next(data: Readonly<T>): void{
    this.data.next(data);
  }

  protected update(current: Readonly<T>, diff: Partial<T>): Readonly<T>{
    return {...current as object, ...diff as object} as Readonly<T>;
  }

  public dispatch(action: Action<T>): void {
    const current = this.current();
    const diff = action(current);
    const result = this.update(current, diff);
    this.next(result);
  }
}
