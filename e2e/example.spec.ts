import { test, expect } from '@playwright/test';
import {beforeEach, describe} from "node:test";

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});

test.describe('counter', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:5173/');
  });

  test('counter is at 0', async ({ page }) => {
    await expect(page.locator('button').first().textContent()).resolves.toBe('count is 0');
  });

  test('counter is at 2 after 2 clicks', async ({ page }) => {
    await page.getByRole('button', { name: 'count is' }).click();
    await page.getByRole('button', { name: 'count is' }).click();
    await expect(page.getByRole('button', { name: 'count is 2' })).toBeVisible();
  });
});
