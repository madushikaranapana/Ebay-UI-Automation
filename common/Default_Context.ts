import { chromium, Browser, BrowserContext, Page } from 'playwright';

class DefaultContext {
  private browser!: Browser;
  private context!: BrowserContext;
  private page!: Page;

  /**
   * Initialize the browser context
   */
  async initialize() {
    this.browser = await chromium.launch();
    this.context = await this.browser.newContext({
      storageState: '.auth/storageState.json', // Load session state if available
    });
    this.page = await this.context.newPage();
    console.log('Browser context initialized.');
  }

  /**
   * Get the current page
   * @returns {Page} - Playwright Page object
   */
  getPage(): Page {
    return this.page;
  }

  /**
   * Close the browser
   */
  async close() {
    await this.browser.close();
    console.log('Browser context closed.');
  }
}

export default new DefaultContext();
