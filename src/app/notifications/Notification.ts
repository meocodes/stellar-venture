export class Notification {

  title: string;
  detail: string;

  constructor(title: string, detail: string) {
    this.title = title;
    this.detail = detail;
  }
}

export class SuccessNotification extends Notification { }

export class WarningNotification extends Notification { }

export class ErrorNotification extends Notification { }
