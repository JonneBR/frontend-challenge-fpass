# Challenge Frontend 🏅 Fpass

## 🎯 Getting Started

To get started follow these steps:

1. Fork & clone repository:

```bash
## Don't forget to ⭐ star and fork it first :)
git clone https://github.com/<your_username)/frontend-challenge-fpass
```

2. Setup a `.env.local` file with the following environment variables

- `NEXT_PUBLIC_BASE_URL=https://gateway.marvel.com`
- `PUBLIC_KEY=`
- `TS=`
- `HASH=`
  OBS: `PUBLIC_KEY`, `TS` and `HASH` may be obtained through [Marvel for Developers](https://developer.marvel.com/)

3. After setup is ready Install the dependencies:

```bash
yarn install --frozen-lockfile
```

4. Run unit tests:

```bash
yarn test
```

5. Run the development server:

```bash
yarn dev
```

6. Open http://localhost:3000 with your browser to see the result.

## Overview

#### Architecture

![alt clean architecture](https://blog.cleancoder.com/uncle-bob/images/2012-08-13-the-clean-architecture/CleanArchitecture.jpg)

#### useCases

- characters: list-characters

![load characters diagram clean architecture](/public/images/load-characters-diagram.png)

> ## Project Objectives

1. ✅ Uma pesquisa pelo nome ou parte do nome do herói.
2. ✅ Listagem do herói com sua thumbnail.
3. ✅ Página com informações sobre o herói selecionado (descrição).

> ## Principles

- Single Responsibility Principle (SRP)
- Open Closed Principle (OCP)
- Interface Segregation Principle (ISP)
- Dependency Inversion Principle (DIP)
- Separation of Concerns (SOC)
- Don't Repeat Yourself (DRY)
- You Aren't Gonna Need It (YAGNI)
- Keep It Simple, Silly (KISS)
- Composition Over Inheritance
- Small Commits

> ## Design Patterns

- Factory
- Composite
- Dependency Injection

> ## Methodologies and Designs

- TDD
- Clean Architecture
- React Server Components
- app Directory: Easier, faster, less client JS
- Next.js Zero Config
- File-system Routing
- Dynamic Routes
- Responsive Layout
- Conventional Commits
- Dependency Diagrams
- Use Cases
- Continuous Integration
- Continuous Delivery
- Continuous Deployment

## 📚 Features

- 🏎️ **[Next.js](https://nextjs.org/)** - Fast by default, with config optimized for performance
- 💅 **[Tailwind CSS](https://tailwindcss.com/)** - A utility-first CSS framework for rapid UI development
- ✨ **[ESlint](https://eslint.org/)** and **[Prettier](https://prettier.io/)** - For clean, consistent, and error-free code
- 🛠️ **[Extremely strict TypeScript](https://www.typescriptlang.org/)** - With [`ts-reset`](https://github.com/total-typescript/ts-reset) library for ultimate type safety
- 📊 **[Bundle analyzer plugin](https://www.npmjs.com/package/@next/bundle-analyzer)** - Keep an eye on your bundle size
- 🧪 **[Jest](https://jestjs.io/)** and **[React Testing Library](https://testing-library.com/react)** - For rock-solid unit and integration tests
- 🎯 **[Absolute imports](https://nextjs.org/docs/advanced-features/module-path-aliases)** - No more spaghetti imports
- 🚀 **[GitHub Actions](https://github.com/features/actions)** - Pre-configured actions for smooth workflows, including Bundle Size and performance stats

Credits: The boilerplate project is based on the official repository **[Next.js Enterprise](https://github.com/Blazity/next-enterprise)** provided by **Blazity**.
