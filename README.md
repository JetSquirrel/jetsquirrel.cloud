# jetsquirrel.cloud

JetSquirrel's bilingual profile and open-source portfolio, built with Bun, Astro, Tailwind CSS, and shadcn/ui.

```sh
bun install
bun run dev
```

```sh
bun run check
bun run build
```

GitHub Actions runs checks and a build on every push and pull request. Cloudflare Pages deploys `main` (build command `bun run build`, output `dist`).
