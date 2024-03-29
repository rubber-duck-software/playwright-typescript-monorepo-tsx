import { test, expect } from "@playwright/test";
import { ComputeOrderCost } from "common";

test("homepage has title and links to intro page", async ({ page }) => {
  await page.goto("http://localhost:3000/");
  await expect(page.getByRole("heading", { level: 1 })).toHaveText(
    `Order Cost is ${ComputeOrderCost()}`
  );
});
