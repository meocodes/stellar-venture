import { AppError } from '../errors/AppError';

export class ShipNotFoundError extends AppError {
  constructor() {
    super('Ship not found', 'The ship searched for could not be found.');
    Object.setPrototypeOf(this, ShipNotFoundError.prototype);
  }
}
