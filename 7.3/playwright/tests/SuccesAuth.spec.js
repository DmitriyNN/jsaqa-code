const { test, expect, chromium } = require("@playwright/test");

// const userParams = require("../user.js");
import { userParams } from "../user.js";

test("Успешная проверка формы авторизации", async ({ page }) => {
  const browser = await chromium.launch();
  const title = page.locator(
    "[class=src-components-pages-Profile-Programs--title--Kw5NH]"
  );
  await page.goto("https://netology.ru/?modal=sign_in");
  await page.click("[placeholder=Email]");
  await page.locator("[placeholder=Email]").fill(userParams.email);
  await page.click("[placeholder=Пароль]");
  await page.locator("[placeholder=Пароль]").fill(userParams.password);
  await page.locator("[data-testid=login-submit-btn]").click();
  await expect(title).toBeVisible();
  await expect(title).toHaveText("Мои курсы и профессии");
  await browser.close();
});
