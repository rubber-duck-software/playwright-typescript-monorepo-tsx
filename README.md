# Playwright Typescript Monorepo Example

This monorepo contains two workspaces: `common`, and `site`. `site` depends on common.

The `common` package handles a variety of functions, including pricing an order and sending emails.
Emails are authored in React and then sent as html, therefore the `common` package includes jsx syntax.
Jsx syntax is handled by the tsc transform, so it is expected that this vanilla typescript workspace will
work with playwright.

The `site` package is a very simple CSR vite app with a single playwright test. The Playwright test checks
that the main header displays the correct order cost (a horribly contrived example, but you get the idea).
When the playwright tests execute, they fail with

```
Cannot find module '@playwright/test/jsx-runtime'
```

Note: this failure is specific to **pnpm monorepos**.

## Setting up this Repository

After cloning, run `pnpm install`.

Now to run the playwright tests, first start the site by running `pnpm --filter=site dev` from the root of the monorepo.

Now, using the VS code playwright extension, attempt to execute the playwright test `site/tests/example.spec.ts`. You should see the failure.
