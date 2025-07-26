import { test, expect } from '@playwright/test';

test('should load homepage', async ({ page }) => {
  await page.goto('https://www.example.com');
  await expect(page).toHaveTitle(/Example Domain/);
});
