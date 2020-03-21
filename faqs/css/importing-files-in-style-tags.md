---
question: How to import files in style tags?
order: 2
---

If you are using a preprocessor, you can use it's import method, which for example in scss would be `@import "path/to/css/file.scss"`. If you are not using a preprocessor, you can still import files, using a PostCSS plugin.

You can leverage Webpack's file resolution and aliases inside the import statement, which means you can use `~` to access `node_modules` packages `@import "~animate-css"`, or `@` alias to access the `src` folder - `@import "@/components/something"`.
