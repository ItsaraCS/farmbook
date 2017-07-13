import { FarmbookPage } from './app.po';

describe('farmbook App', () => {
  let page: FarmbookPage;

  beforeEach(() => {
    page = new FarmbookPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
