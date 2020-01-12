# How to create FAQs

## FAQ Categories

Categories are defined in `docs/.vuepress/config.js` in the options object that is 
passed to the FAQ plugin. The order of the keys is the same as the order of display.

## FAQ Items

Every `.md` file within a category corresponds to an FAQ item.

An FAQ item comprises:

- `question` - The question, used as the title/heading
- `order` - An integer, used to determine the ordering
- `links` - Option links to related internal/external resources

### Example file

```md
---
question: How do I create an FAQ?
links:
  Meta:
    - href: https://github.com/dobromir-hristov/vuecommunity/tree/master/faqs/README.md
      text: A link to the file you're already reading.
order: 1
---

Creating an FAQ *couldn't* be **easier**!
```

### Question

The `question` is essentially the title but is also used to build the slug.

It should be phrased as a question and is required.

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

> **NOTE** For now, you cannot use Vue components (such as badges) 
> inside the Markdown but this will be rectified as soon as possible.
