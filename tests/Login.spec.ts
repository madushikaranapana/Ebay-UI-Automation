import { test } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';

test.describe('eBay Automation Tests', () => {
  let loginPage: LoginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.navigateToLogin();
  });

  test('Verify eBay homepage loads successfully', async () => {
    // Assertions are already in navigateToLogin()
  });

  test('Search for an item', async ({ page }) => {
    await loginPage.searchForItem('laptop');
  });
});
