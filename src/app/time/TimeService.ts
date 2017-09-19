import { Injectable } from '@angular/core';
import { IntervalObservable } from 'rxjs/observable/IntervalObservable';
import { Observable, Subscription, Subscriber, BehaviorSubject } from 'rxjs';

@Injectable()
export class TimeService {

  private subject: BehaviorSubject<Date>;

  constructor() {
    this.subject = new BehaviorSubject(new Date(localStorage.getItem('currentDay')));
    Observable.interval(1000).subscribe(() => this.nextDay());
  }

  get day(): Observable<Date> {
    return this.subject.asObservable();
  }

  private nextDay() {
    let next: Date = new Date(this.subject.getValue().getTime() + (1000 * 60 * 60 * 24));
    this.subject.next(next);
    localStorage.setItem('currentDay', next.toString());
  }
}
