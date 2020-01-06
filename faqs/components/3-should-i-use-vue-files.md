---
question: Am I supposed to use .vue files?
category: Components
---

Short answer - no. You can work anyway you see fit.

Long answer - using `.vue` components helps with keeping everything related to the component in one place. IDEs have improved drastically, and have better highlighting and code completion. `.vue` components also allow for using **scoped** or **module** css, preventing styling from leaking into other components. You can also leverage different preprocessors like SASS, LESS, Pug for templating, even TypeScript.
