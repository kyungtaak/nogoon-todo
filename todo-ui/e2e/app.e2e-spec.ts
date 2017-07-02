import { TodoUiPage } from './app.po';

describe('todo-ui App', () => {
  let page: TodoUiPage;

  beforeEach(() => {
    page = new TodoUiPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
