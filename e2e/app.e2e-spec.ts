import { TechnePage } from './app.po';

describe('techne App', () => {
  let page: TechnePage;

  beforeEach(() => {
    page = new TechnePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
