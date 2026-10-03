# fuleo.co

An Angular 9 single-page web application for a "citas" (appointments/dates) scheduling flow, built with Angular Material.

## What this is

This looks like a personal/practice project (an early-stage product idea called "fuleo.co") rather than a finished production app. It includes:

- A login screen (`seguridad` module)
- A main dashboard shell (`pantalla-principal`)
- A "citas" (appointments) module with sub-features: a list of appointments (`lista-citas`), an appointment detail view (`cita`), a home/menu layout, and "social media" and "top" components

There's no backend wired up in the code visible in this repo (no real HTTP services calling an API beyond a placeholder `User` model), and the app still carries the stock Angular CLI scaffold (karma/protractor configs, default lint rules) on top of the custom feature modules.

## Tech stack

- **Angular 9** (with a couple of packages bumped to `@angular/core` ~11) + TypeScript
- **Angular Material** / Angular CDK for UI components
- **RxJS**
- Karma + Jasmine for unit tests, Protractor for e2e tests (default Angular CLI setup)

## Running it

```bash
npm install
npm start      # ng serve --disableHostCheck, served at http://localhost:4200
npm run build  # production build output to dist/
npm test       # unit tests via Karma
npm run e2e    # end-to-end tests via Protractor
```

## Honest context

This repository appears to be a practice/exploration project rather than a maintained production service — there's no CI, no deployed backend, and the dependency versions date back to ~2020 (Angular 9). Treat it as a portfolio/learning piece rather than an actively supported app.
