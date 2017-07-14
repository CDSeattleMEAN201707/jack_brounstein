import { NestedComponentsPage } from './app.po';

describe('nested-components App', () => {
  let page: NestedComponentsPage;

  beforeEach(() => {
    page = new NestedComponentsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
