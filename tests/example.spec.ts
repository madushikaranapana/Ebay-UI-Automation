import { Page, Locator, expect } from '@playwright/test';

export class ProductPage {
  readonly page: Page;
  readonly relatedSection: Locator;
  readonly relatedItems: Locator;

  constructor(page: Page) {
    this.page = page;

    // Related products section
    this.relatedSection = page.locator('[data-testid="related-items"], section:has-text("Related")');

    // Each related product card
    this.relatedItems = this.relatedSection.locator('.s-item');
  }

  async openProduct(productUrl: string) {
    await this.page.goto(productUrl);
    await this.page.waitForLoadState('networkidle');
  }

  async validateRelatedSectionVisible() {
    await expect(this.relatedSection).toBeVisible();
  }

  async validateMaxRelatedProducts(maxCount = 6) {
    const count = await this.relatedItems.count();
    expect(count).toBeGreaterThan(0);
    expect(count).toBeLessThanOrEqual(maxCount);
  }

  async validateRelatedProductLayout() {
    const count = await this.relatedItems.count();

    for (let i = 0; i < count; i++) {
      const item = this.relatedItems.nth(i);

      await expect(item).toBeVisible();

      // Image
      await expect(item.locator('img')).toBeVisible();

      // Title
      await expect(item.locator('.s-item__title')).toBeVisible();

      // Price
      await expect(item.locator('.s-item__price')).toBeVisible();

      // CTA - Watch / Add to Cart (if present)
      const watchBtn = item.locator('button:has-text("Watch")');
      if (await watchBtn.count() > 0) {
        await expect(watchBtn).toBeVisible();
      }
    }
  }
}
