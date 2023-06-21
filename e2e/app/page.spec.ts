import { expect, test } from "@playwright/test"

test("has title", async ({ page }) => {
  await page.goto("./")
  const title = `Marvel Mania: Exploring the Marvel Universe and its Iconic
Characters`
  await expect(page).toHaveTitle(title)
})
