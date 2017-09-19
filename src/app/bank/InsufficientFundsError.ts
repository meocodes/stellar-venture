import { AppError } from '../errors/AppError';

export class InsufficientFundsError extends AppError {
  constructor(shortfall: number) {
    super('Insufficient funds', `You need additional ${shortfall} C to complete this transaction.`);
    Object.setPrototypeOf(this, InsufficientFundsError.prototype);
  }
}
