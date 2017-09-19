import { browser, by, element } from 'protractor';
import { BasePage } from './BasePage';

export class BankPage extends BasePage { constructor() { super('/bank') } }

export class PlantsPage extends BasePage { constructor() { super('/plants') } }

export class ShipsPage extends BasePage {

  constructor() { super('/ships') }

  buy() {
    return browser.get(this.basePath + '/buy');
  }

  myShips() {
    return browser.get(this.basePath + '/my');
  }

  repair() {
    return browser.get(this.basePath + '/repair');
  }

  sell() {
    return browser.get(this.basePath + '/sell');
  }
}
