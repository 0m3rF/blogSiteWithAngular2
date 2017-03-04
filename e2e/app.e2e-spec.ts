import { BlogSitePage } from './app.po';

describe('blog-site App', () => {
  let page: BlogSitePage;

  beforeEach(() => {
    page = new BlogSitePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
