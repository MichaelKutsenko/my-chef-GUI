import { ChefGuiPage } from './app.po';

describe('chef-gui App', () => {
  let page: ChefGuiPage;

  beforeEach(() => {
    page = new ChefGuiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
