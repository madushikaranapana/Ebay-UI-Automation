import { test } from '@playwright/test';
import { ProductPage } from '../pages/productPage';

test.describe('Related Products - Layout & Visual Validation', () => {

  test('Validate layout and visual elements of related products section', async ({ page }) => {
    const productPage = new ProductPage(page);

    await productPage.openHomePage();
    await productPage.searchProduct('laptop');

    const productId = await productPage.openFirstProductAndCaptureId();
    console.log(`Captured Product ID: ${productId}`);

    await productPage.validateRelatedSectionVisible();
    await productPage.validateMaxRelatedProducts(6);
    await productPage.validateRelatedProductLayout();
  });

});
