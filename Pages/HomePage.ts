import { Page } from 'playwright';

export class HomePage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async verifyHomePage() {
    await this.page.waitForSelector('#homePageElement'); 
  }

  async performSomeAction() {
    await this.page.click('#someButton'); 
  }
}
