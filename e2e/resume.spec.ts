import { test, expect } from '@playwright/test';

test.describe('Resume Page', () => {
  test('displays PDF iframe', async ({ page }) => {
    await page.goto('/resume');

    // Page heading
    await expect(page.locator('h2')).toContainText('Resume');

    // PDF iframe exists with correct src
    const iframe = page.locator('iframe');
    await expect(iframe).toBeVisible();
    await expect(iframe).toHaveAttribute('src', '/assets/mac_obrien.pdf');
  });

  test('has working download link', async ({ page }) => {
    await page.goto('/resume');

    const downloadLink = page.locator('a.download-link');
    await expect(downloadLink).toBeVisible();
    await expect(downloadLink).toHaveAttribute(
      'href',
      '/assets/mac_obrien.pdf'
    );
    await expect(downloadLink).toHaveAttribute('download', 'mac_obrien.pdf');
  });
});
