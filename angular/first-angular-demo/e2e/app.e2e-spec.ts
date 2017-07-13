import { FirstAngularDemoPage } from './app.po';

describe('first-angular-demo App', () => {
  let page: FirstAngularDemoPage;

  beforeEach(() => {
    page = new FirstAngularDemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
