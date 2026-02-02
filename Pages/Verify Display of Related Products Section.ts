import { Page, expect } from "@playwright/test";

export class VerifyRelatedItemsPage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async navigateToEbay(productId: string) {
    // Navigate to product page
    await this.page.goto(`https://www.ebay.com/itm/${productId}`);

    // Locate related items section
    const relatedSection = this.page.locator('[data-testid="related-items"]');
  //  await expect(relatedSection).toBeVisible();

    // Locate related items
    const relatedItems = relatedSection.locator('.s-item');

    // Verify max 6 related items
    const count = await relatedItems.count();
    expect(count).toBeLessThanOrEqual(6);
  }
}
