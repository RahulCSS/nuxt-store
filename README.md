# Nuxt Minimal Starter

Look at the [Nuxt documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.


# New Nuxt Project

## Installation & Configuration

Use the following command to create a new starter project

```bash
# npm
npx nuxi@latest init <project-name>
```

Automate migration to Nuxt 4 by running

```bash
# npm
npx codemod@latest nuxt/4/file-structure
```

Add Tailwind using the Nuxt CLI to your project

```bash
# npm
npx nuxi@latest module add tailwindcss
```

Configure Tailwind CSS
```bash
# npm
npx tailwind init
```

Add Google Fonts to Nuxt application

```bash
# npm
npx nuxi@latest module add google-fonts
```

Run the following command to add the Icon module to your project
```bash
# npm
npx nuxi module add icon
```

Plug-and-play image optimization for Nuxt apps. Resize and transform your images using built-in optimizer or your favorite images CDN.

```bash
# npm
npx nuxi@latest module add image
```