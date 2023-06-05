* `next-host` PORT 3000
* `vite-vue-remote` PORT 5000
* `vue-remote` PORT 5001

To get started, make sure you have `pnpm` installed.

In each of the dir, `pnpm install` to install dependencies.

In `vue-remote`, run `pnpm run build && pnpm run serve`. Keep the `vue-remote` running.

In `next-host`, run `pnpm run dev`, and load up a browser to access the Next.js app and see the first error regarding `module not found`.

This will be roughly the same in `vite-vue-remote` when attempting to load the `vue-remote` component onto `vite-vue-remote`.