import { test, expect, type Page } from '@playwright/test'
import AxeBuilder from '@axe-core/playwright'

const EXCHANGE_RATES_URL = 'https://api.coinbase.com/v2/exchange-rates?currency=USD'

const MOCK_RATES = {
  data: {
    currency: 'USD',
    rates: {
      BTC: '0.000015',
      ETH: '0.00043'
    }
  }
}

/**  UInputNumber uses a visually hidden input[data-hidden] internally for form
 * submission. It is intentionally inaccessible and cannot be labelled from
 * outside the component. */
const axeBuilder = (page: Page) =>
  new AxeBuilder({ page }).exclude('input[data-hidden]')

test.describe('Accessibility', () => {
  test.beforeEach(async ({ page }) => {
    await page.route(EXCHANGE_RATES_URL, route =>
      route.fulfill({ json: MOCK_RATES })
    )
  })

  test('home page has no accessibility violations', async ({ page }) => {
    await page.goto('/')

    const results = await axeBuilder(page).analyze()

    expect(results.violations).toEqual([])
  })

  test('calculator has no accessibility violations after input', async ({ page }) => {
    await page.goto('/')
    await page.waitForSelector('output')

    const input = page.getByLabel('Investible Assets')
    await input.fill('1000')

    const results = await axeBuilder(page).analyze()

    expect(results.violations).toEqual([])
  })
})
