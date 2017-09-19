import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './AppComponent.html'
})
export class AppComponent {

  constructor() {
    if (!this.funds) {
      localStorage.setItem('funds', '350000');
    }
  }

  get funds(): string {
    return localStorage.getItem('funds');
  }
}
