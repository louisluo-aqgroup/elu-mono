# ELU-Mono

A modern monorepo for ELUELU design system and component library.

## Usage

```bash
pnpm dlx shadcn@latest init
```

## Project Structure

```
ELU-Mono/
├── apps/
│   └── elu-storybook/     # Component showcase and documentation
├── packages/
│   └── elu-ui/            # UI component library
└── configs/
    ├── eslint/            # Shared ESLint configuration
    ├── prettier/          # Shared Prettier configuration
    └── typescript/        # Shared TypeScript configuration
```

## Adding Components

To add components to the UI library:

```bash
pnpm dlx shadcn@latest add button -c apps/elu-storybook
```

This will place the UI components in the `packages/elu-ui/src/components` directory.

## Using Components

Import components from the `@workspace/elu-ui` package:

```tsx
import { Button } from '@workspace/elu-ui/components/button';
```
