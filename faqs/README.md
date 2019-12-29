# How to create FAQs

**NOTE:** The numbers at the beginning of the categories *and* items determine their ordering.

## FAQ Categories

Each directory corresponds to a category however the directory name does not matter, as the actual category name is stored in the YAML Front Matter of each FAQ.

## FAQ Items

Every `.md` file within a category corresponds to an FAQ item.

An FAQ item comprises a question, an answer and optional links to internal and external resources.

### Example file

```md
---
question: How do I create an FAQ?
category: Meta
links:
  Meta:
    - href: https://github.com/dobromir-hristov/vuecommunity/tree/master/faqs/README.md
      text: A link to the file you're already reading.
---

Creating an FAQ *couldn't* be **easier**!
```

### Question

The `question` is essentially the title but is also used to build the slug.

It should be phrased as a question and is required.

### Category

The `category` is the heading that the question will be filed under and is required.

Currently the categories are: 

1. General Vue
2. Components
3. Vuex
4. UI Libraries
5. Server Side Rendering
6. Toolchain
7. Cascading Style Sheets

For now, they are case-sensitive, so watch out for that.

### Links

The `links` object maps `<useful-links-section>` titles to links.

The links will automatically be inserted below the content, if present.

A link object should contain a `href` and a `text`.

You can have as many sections and as many links as you want.

```yaml
links:
  Section One:
    - href: https://www.example.com/foo
      text: Foo
    - href: https://www.example.com/bar
      text: Bar
  Section Two:
    - href: https://www.example.com/baz
      text: Baz
```

### Content

Everything below the YAML Front Matter is just Markdown.
