import { test, expect } from '@playwright/test';

test.describe('Portfolio Page', () => {
  test('displays all projects', async ({ page }) => {
    await page.goto('/portfolio');

    await expect(page.locator('h2')).toContainText('Portfolio');

    // Check that projects are rendered
    const projects = page.locator('.project');
    await expect(projects).toHaveCount(9);
  });

  test('projects have GitHub links', async ({ page }) => {
    await page.goto('/portfolio');

    const githubLinks = page.locator('a:has-text("Link to GitHub Repository")');
    await expect(githubLinks).toHaveCount(9);

    // All links should open in new tab
    for (const link of await githubLinks.all()) {
      await expect(link).toHaveAttribute('target', '_blank');
    }
  });
});
