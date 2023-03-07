# Getting Started with JasonReactBoilerplate

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

The bulk of the relevant code is in `src/components` and `src/lib`.

## How to run this project

Please install `npm` and `yarn` before running this project.

```bash
> yarn              # Run this once to install dependencies
> yarn run start    # Start app in development mode
> yarn run test     # Start test runner in interactive watch mode
```

Once starting the app in development mode, open [http://localhost:3000](http://localhost:3000) to view it in your browser.
You should see the following in your browser upon initial load:

![Demo at load time](http://via.placeholder.com/640x360)

Tests are located in `src/components/App.test.js`.

## Tools used

I was deliberate about pulling in each package on top of the packages installed with `create-react-app`.
Ideally we add Typescript to this project before getting any farther! Here's some notes on why I added the various packages:

- [`use-async-resource`](https://www.npmjs.com/package/use-async-resource) and [`use-error-boundary`](https://www.npmjs.com/package/use-error-boundary) to support Suspense-capable fetching from the Giphy API
- [`dayjs`](https://www.npmjs.com/package/dayjs) for an immutable data library weighing in at just 2kB
- `classnames`, `sass`, and CSS modules pattern to support SCSS modules
- `@faker-js/faker` for `TODO`
- `@testing-library` and `jest` for testing
- `husky`, `lint-staged`, `eslint`, `stylelint`, and `prettier` for automated linting

## Design decisions

`TODO`.
