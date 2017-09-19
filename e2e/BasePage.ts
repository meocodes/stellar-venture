import { browser, by, element } from 'protractor';

export class BasePage {

  basePath: string;

  constructor(basePath: string) {
    this.basePath = basePath;
  }

  navigateTo() {
    return browser.get(this.basePath);
  }

  getParagraphText() {
    return element(by.css('h1')).getText();
  }
}
