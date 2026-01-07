import { Page } from "@playwright/test";

export class ElementsPage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async navigateToEbay() {
    await this.page.goto("https://www.ebay.com");
  }
}
