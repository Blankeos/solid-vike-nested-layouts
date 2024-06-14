# solid vike nested layouts

This is a repro for my PR at: https://github.com/vikejs/vike-solid/pull/86 that implements Nested Cumulative Layouts for Vike Solid.

1. Make sure you cloned https://github.com/vikejs/vike-solid
2. cd `vike-solid/vike-solid` and type `pwd` in the terminal to get the directory. Copy that.
3. Make sure to `pnpm build` and `pnpm link .`
4. Clone this repo somewhere and go to package.json and replace the absolute url after `link:` with your absolute url.

```ts
    "vike-solid": "link:/Users/carlo/Desktop/Projects/vike-solid/vike-solid"
```

5. `pnpm install` and `pnpm dev` to start the server.

https://github.com/vikejs/vike-solid/assets/38070918/fd049755-de72-4e54-b783-9795f2eed6c1
