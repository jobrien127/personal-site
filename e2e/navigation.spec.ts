import { test, expect } from '@playwright/test';

test.describe('Navigation', () => {
  test('can navigate between pages', async ({ page }) => {
    await page.goto('/');

    // Home page loads
    await expect(page.locator('h2')).toContainText('Home');

    // Navigate to Resume
    await page.click('button:has-text("Resume")');
    await expect(page.locator('h2')).toContainText('Resume');

    // Navigate to Portfolio
    await page.click('button:has-text("Portfolio")');
    await expect(page.locator('h2')).toContainText('Portfolio');

    // Navigate back to Home
    await page.click('button:has-text("Home")');
    await expect(page.locator('h2')).toContainText('Home');
  });
});
