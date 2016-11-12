import { GithopNg2Page } from './app.po';

describe('githop-ng2 App', function() {
  let page: GithopNg2Page;

  beforeEach(() => {
    page = new GithopNg2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
