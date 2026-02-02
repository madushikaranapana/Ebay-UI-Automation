import { Page, Locator, expect } from '@playwright/test';

export class ProductPage {
  readonly page: Page;
  readonly searchBox: Locator;
  readonly searchButton: Locator;
  readonly searchResults: Locator;
  readonly relatedSection: Locator;
  readonly relatedItems: Locator;

  constructor(page: Page) {
    this.page = page;

    // Search
    this.searchBox = page.locator('#gh-ac');
    this.searchButton = page.locator('[id="gh-search-btn"]');
    this.searchResults = page.locator('.su-card-container su-card-container--horizontal');

    // Related products
    this.relatedSection = page.locator('[data-testid="related-items"], section:has-text("Related")');
    this.relatedItems = this.relatedSection.locator('.s-item');
  }

  async openHomePage() {
    await this.page.goto('https://www.ebay.com/');
   // await this.page.waitForLoadState('networkidle');
  }

  async searchProduct(keyword: string) {
    await this.searchBox.fill(keyword);
    await this.searchButton.click();
   // await expect(this.searchResults.first()).toBeVisible();
  }

  async openFirstProductAndCaptureId(): Promise<string> {
    await this.searchResults.first().click();
 //  await this.page.waitForLoadState('domcontentloaded');

    const url = this.page.url();
    const productId = url.match(/itm\/(\d+)/)?.[1];

    expect(productId, 'Product ID should be captured').toBeTruthy();
    return productId!;
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
      await expect(item.locator('img')).toBeVisible();
      await expect(item.locator('.s-item__title')).toBeVisible();
      await expect(item.locator('.s-item__price')).toBeVisible();
    }
  }
}
