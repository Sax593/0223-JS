const { test, expect } = require("@playwright/test");

test("Able to login with valid credentials", async ({ page }) => {
  await page.goto("https://odyssey.wildcodeschool.com/");
  await page.getByPlaceholder("your@email.com").click();
  await page.getByPlaceholder("your@email.com").fill("test@test.com");
  await page.getByLabel("Your password").click();
  await page.getByLabel("Your password").fill("1234");
  await page.getByRole("button", { name: "Sign in" }).click();
  await page.pause();
});
