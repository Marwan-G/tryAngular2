import { TryAngularPage } from './app.po';

describe('try-angular App', () => {
  let page: TryAngularPage;

  beforeEach(() => {
    page = new TryAngularPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
