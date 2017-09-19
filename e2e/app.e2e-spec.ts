import { BankPage, PlantsPage, ShipsPage } from './app.po';

describe('Bank page', () => {
  let page: PlantsPage;

  beforeEach(() => {
    page = new BankPage();
  });

  it('should have expected heading', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Bank');
  });
});

describe('Ships page', () => {
  let page: ShipsPage;

  beforeEach(() => {
    page = new ShipsPage();
  });

  it('should have expected heading', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Ships');
  });

  it('should be possible to display my ships', () => {
    page.buy();
    expect(page.getParagraphText()).toEqual('My ships');
  });

  it('should be possible to buy a ship', () => {
    page.buy();
    expect(page.getParagraphText()).toEqual('Buy');
  });

  it('should be possible to repair a ship', () => {
    page.repair();
    expect(page.getParagraphText()).toEqual('Repair');
  });

  it('should be possible to sell a ship', () => {
    page.sell();
    expect(page.getParagraphText()).toEqual('Sell');
  });
});

describe('Plants page', () => {
  let page: PlantsPage;

  beforeEach(() => {
    page = new PlantsPage();
  });

  it('should have expected heading', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Plants');
  });
});
