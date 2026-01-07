
import { Page, expect } from '@playwright/test';

export class LoginPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async navigateToLogin() {
    await this.page.goto('https://www.ebay.com/');
    await expect(this.page).toHaveURL(/ebay\.com/);
    await expect(this.page).toHaveTitle(/Electronics, Cars, Fashion/i);
    await expect(this.page.locator('#gh-logo')).toBeVisible();
    // await expect(this.page.locator('#gh-ac')).toBeEnabled();
    // await this.page.waitForLoadState('networkidle');
  }

  async searchForItem(item: string) {
    await this.page.fill('#gh-ac', item);
    await this.page.click('#gh-btn');
    await expect(this.page.locator('.srp-controls__count-heading')).toBeVisible();
  }
}
