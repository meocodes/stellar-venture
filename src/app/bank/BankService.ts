import { Injectable }     from '@angular/core';
import { InsufficientFundsError } from './InsufficientFundsError';

@Injectable()
export class BankService {

  pay(amount: number) {
    this.decreaseFunds(amount);
  }

  borrow(amount: number) {
    this.increaseDebt(amount);
    this.increaseFunds(amount);
  }

  repay(amount: number) {
    if (this.funds > amount && this.debt >= amount) {
      this.decreaseDebt(amount);
      this.decreaseFunds(amount);
    }
  }

  increaseFunds(amount: number) {
    localStorage.setItem('funds', String(this.funds + amount));
  }

  decreaseFunds(amount: number) {
    if (this.funds < amount) {
      throw new InsufficientFundsError(amount - this.funds);
    }
    localStorage.setItem('funds', String(this.funds - amount));
  }

  increaseDebt(amount: number) {
    localStorage.setItem('debt', String(this.debt + amount));
  }

  decreaseDebt(amount: number) {
    if (this.debt - amount < 0) {

    } else {
      localStorage.setItem('debt', String(this.debt - amount));
    }
  }

  get funds(): number {
    if (localStorage.getItem('funds')) {
      return Number(localStorage.getItem('funds'));
    } else {
      return 0;
    }
  }

  get debt(): number {
    if (localStorage.getItem('debt')) {
      return Number(localStorage.getItem('debt'));
    } else {
      return 0;
    }
  }
}
