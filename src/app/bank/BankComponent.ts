import { Component, OnInit } from '@angular/core';
import { BankService } from './BankService';

@Component({
  selector: 'bank',
  templateUrl: './BankComponent.html'
})
export class BankComponent implements OnInit {

  creditAmount: number = 100000;
  repayAmount: number;

  constructor(public bank: BankService) { }

  ngOnInit(): void {
    this.repayAmount = this.bank.debt;
  }
}
