import { Component, OnInit, OnDestroy } from '@angular/core';
import { TimeService } from './TimeService';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'day',
  template: '{{this.current.day | async | date : "yyyy-MM-dd"}}'
})
export class DayComponent {

  constructor(public current: TimeService) { }
}
