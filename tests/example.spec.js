const { test, expect } = require('@playwright/test');

test('OrangeHRM Login', async ({ page }) => {
 console.log("Navigating to OrangeHRM Login Page");

await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

console.log("Entering Username");
await page.getByPlaceholder('Username').fill('Admin');

console.log("Entering Password");
await page.getByPlaceholder('Password').fill('admin123');

console.log("Clicking Login");
await page.getByRole('button', { name: 'Login' }).click();

console.log("Verifying Dashboard URL");
await expect(page).toHaveURL(/dashboard/);

console.log("Login Successful");
});