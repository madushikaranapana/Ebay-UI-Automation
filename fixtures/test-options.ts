import { test as base } from '@playwright/test'



export const test ({
  bearerToken: ['', { option: true }],
  tokenEndpoint: ['', { option: true }],
  refreshToken: ['', { option: true }],

  //authentication
  authenticate: [async ({ page }, use) => {
    base.setTimeout(90000);
    await page.goto('https://example.com');
    const authfile = '.auth/browserSession.json'
    await page.goto('https://www.gmail.com');
    await page.locator('#identifierId').fill('qe_test_automation@insighture.com', {timeout:6000});
    await page.locator('#identifierNext').click();
    await page.locator('[name="Passwd"]').fill('VGKQq6KBHVum6mA%1');
    await page.locator('(//button)[2]').click();//todo
    await page.waitForLoadState('load');
    await page.context().storageState({ path: authfile })
    await page.locator('[title="Gmail"]').isVisible()

    await page.waitForTimeout(10000).then(async () => {
      await page.goto('https://console.dev.skyu.io/')
      const requestPromise = page.waitForRequest('**/auth-service/users/orgData');
      await page.locator('.css-1yxkfcg').first().click().then(() => {
        return requestPromise
      }
      ).then(async (request) => {
        console.log('Request Method:', request.headers());
        process.env.BEARER_TOKEN = <string>await request.headerValue("authorization");
        console.log(process.env.BEARER_TOKEN)
        console.log('::: The access token was stripped and stored.')
      });
    })
    await use('')
  }, { auto: false }]
})