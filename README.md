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
SyntaxError: Unexpected token '<'
```

Note: this failure is specific to **JSX fragments**. If the jsx content inside the `common` folder contains
no jsx fragments, the tests would pass.

## Setting up this Repository

After cloning, run `npm install`.

Now to run the playwright tests, first start the site by running `npm -w site run dev` from the root of the monorepo.

In a separate terminal window run `npm -w site run test` (also from the root of the monorepo). The playwright test will fail.
