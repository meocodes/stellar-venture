import { Component, ViewContainerRef } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Notification, SuccessNotification, WarningNotification, ErrorNotification } from './Notification';
import { NotificationService } from './NotificationService';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';


@Component({
  selector: 'notifications',
  template: ''
})
export class NotificationsComponent {

  private notification: Notification;
  subscription: Subscription;

  constructor(private notifications: NotificationService, public toastr: ToastsManager, vcr: ViewContainerRef) {
    this.toastr.setRootViewContainerRef(vcr);
    this.subscription = notifications.events.subscribe(
      notification => this.on(notification)
    );
  }

  private on(notification: Notification): void {
    if (notification instanceof SuccessNotification) {
      this.toastr.success(notification.detail, notification.title);
    } else if (notification instanceof WarningNotification) {
      this.toastr.warning(notification.detail, notification.title);
    } else if (notification instanceof ErrorNotification) {
      this.toastr.error(notification.detail, notification.title);
    } else {
      this.toastr.info(notification.detail, notification.title);
    }
    this.notification = notification;
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
