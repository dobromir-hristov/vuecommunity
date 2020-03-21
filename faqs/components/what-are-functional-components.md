---
question: What are functional components used for?
order: 4
---

Functional components do not have state, methods or instance, they are essentially just plain functions and re-render every time the parent renders. They are perfect for components, that consist of mostly static markup. These components are very fast to render, as they do not have a Vue instance.

They are most often used to create components, that would be rendered hundreds of times on a page, or when the component does not need reactive data.
