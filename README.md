# Crypto Calculator

A web app that takes in a USD amount as holdings and calculates the 70/30 split for BTC and ETH crypto currencies.

## Tech Stack

### Framework & Language

- **[Nuxt 4](https://nuxt.com/)** - Full-stack Vue framework with SSG support
- **[Vue 3](https://vuejs.org/)** - UI framework
- **[TypeScript](https://www.typescriptlang.org/)** - Type safety

### Styling

- **[Tailwind CSS](https://tailwindcss.com/)** - CSS framework
- **[Nuxt UI](https://ui.nuxt.com/)** - Tailwind component library for Nuxt to quickly spin up a clean UI

### Data & State Management

- **[@pinia/colada](https://pinia-colada.esm.dev/)** - Data fetching and caching layer

### Testing

- **[Playwright](https://playwright.dev/)** - E2E testing
- **[@axe-core/playwright](https://www.npmjs.com/package/@axe-core/playwright)** - Accessibility testing

### Code Quality & Tooling

- **[ESLint](https://eslint.org/)** - Linter
- **[Prettier](https://prettier.io/)** - Code formatter

### AI Tools
- **[Claude Code](https://code.claude.com/docs/en/overview)** - Agentic coding tool. Used as code reviewer, documenter, troubleshooter, and for app architecture ideas

## Getting Started

### Prerequisites

- **Node.js 24.x**
- **pnpm**

### Installation

#### 1) Clone the repository

```sh
git clone https://github.com/Treysouz/crypto-calculator.git
```

#### 2) Navigate to project directory

```sh
cd crypto-calculator
```

#### 3) Install dependencies

```sh
pnpm install
```

### Development

#### - Start development server

```sh
pnpm dev
```

### Building

#### 1) Create production build

```sh
pnpm build
```

#### 2) Preview production build locally

```sh
pnpm preview
```

### Code Quality

#### - Lint code

```sh
pnpm lint
```

#### - Type check

```sh
pnpm typecheck
```

## Testing

### E2E Tests

#### - Run E2E tests

```sh
pnpm test:e2e
```

### Technical Considerations
- The take-home assignment instructions strongly encourage Vite and Vue 3, so I went with Nuxt for SSG support to boost performance a bit. The boost is definitely negligible considering how small the application is, but I wanted to approach the assignment with a production-level mindset. This is my first Vue project, but treating it like I would a React application helped with any knowledge gaps.
- @pinia/colada was used to cache the response from the Coinbase API. Stale time of 5 seconds was my way of keeping rates as up-to-date as possible while still making sure the Coinbase API wasn't called multiple times unnecessarily. For transparency, I added a disclaimer in the RateDisplay component so users know when the rates were last obtained.
- Playwright is used only for accessibility checks as an added layer of confidence. Nuxt UI is built with accessible components, but I wanted to add a double-check just in case.
- My general rule of thumb regarding testing is to use E2E tests to test entire user flows (for example, a test for whether completing an entire form and submitting it produces the expected results) and unit tests for granular component testing (for example, a test for whether a specific form field works as expected). This would be my approach with Playwright and Vitest + Vue Testing Library if automated testing were a requirement for this assignment.

