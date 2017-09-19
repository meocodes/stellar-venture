import { Injectable, Injector, ErrorHandler } from '@angular/core';
import { AppError } from './AppError';
import { ErrorNotification } from '../notifications/Notification';
import { NotificationService } from '../notifications/NotificationService';

@Injectable()
export class AppErrorHandler implements ErrorHandler {

  private notifications: NotificationService;

  constructor(injector: Injector) {
    this.notifications = injector.get(NotificationService);
  }

  handleError(e) {
    if (e instanceof AppError) {
      this.notifications.add(new ErrorNotification(e.title, e.detail));
    } else {
      this.notifications.add(new ErrorNotification('Unexpected error', e));
    }
  }
}
