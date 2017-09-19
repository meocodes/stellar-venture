const title = 'Insufficient funds';

export class AppError extends Error {

  title: string;
  detail: string;

  constructor(title: string, detail: string) {
    super(`${title}: ${detail}`);
    this.title = title;
    this.detail = detail;
    Object.setPrototypeOf(this, AppError.prototype);
  }
}
