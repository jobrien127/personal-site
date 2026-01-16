import { test, expect } from '@playwright/test';

test.describe('Resume Page', () => {
  test('displays PDF iframe', async ({ page }) => {
    await page.goto('/resume');

    // Page heading
    await expect(page.locator('h2')).toContainText('Resume');

    // PDF iframe exists with correct src
    const iframe = page.locator('iframe');
    await expect(iframe).toBeVisible();
    await expect(iframe).toHaveAttribute('src', '/assets/Joseph_OBrien_CV.pdf');
  });

  test('has working download link', async ({ page }) => {
    await page.goto('/resume');

    const downloadLink = page.locator('a.download-link');
    await expect(downloadLink).toBeVisible();
    await expect(downloadLink).toHaveAttribute(
      'href',
      '/assets/Joseph_OBrien_CV.pdf'
    );
    await expect(downloadLink).toHaveAttribute(
      'download',
      'Joseph_OBrien_Resume.pdf'
    );
  });
});
