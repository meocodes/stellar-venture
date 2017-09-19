import { Injectable }       from '@angular/core';
import { ViewContainerRef } from '@angular/core';
import { Notification }     from './Notification';
import { Subject }          from 'rxjs/Subject';

@Injectable()
export class NotificationService {

  private subject: Subject<Notification> = new Subject<Notification>();
  private notifications: Notification[] = [];

  events = this.subject.asObservable();

  public add(notification: Notification) {
    this.subject.next(notification);
  }

  public list(): Notification[] {
    return this.notifications;
  }
}
