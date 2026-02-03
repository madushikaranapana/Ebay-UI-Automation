import { test } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';
import { VerifyRelatedItemsPage } from '../pages/verify Display of Related Products Section';

test.describe('eBay Automation Tests', () => {
  let loginPage: LoginPage;
  let relatedItemsPage: VerifyRelatedItemsPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    relatedItemsPage = new VerifyRelatedItemsPage(page);

    await loginPage.navigateToLogin();
    // add login steps if required
  });

  test('Verify display of related products section', async () => {
    const productId = '1234567890'; // example
    await relatedItemsPage.navigateToEbay(productId);
  });
});
