import { TheCompleteFoodAppPage } from './app.po';

describe('the-complete-food-app App', () => {
  let page: TheCompleteFoodAppPage;

  beforeEach(() => {
    page = new TheCompleteFoodAppPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
