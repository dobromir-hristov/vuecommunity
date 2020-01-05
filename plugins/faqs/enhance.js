function slugify(input) {
  return String(input)
    .trim()
    .toLowerCase()
    .replace(/([^\w]|\s)+/g, '-')
    .replace(/-$/g, '')
}

export default ({ Vue, siteData }) => {
  Vue.mixin({ methods: { slugify } })

  const faqPage = siteData.pages
    .find(page => page.path === '/guide/learning/faq.html')

  if ( ! faqPage) {
    throw new Error("The FAQ plugin couldn't find the FAQ page (guide/learning/faq.md)! Did its path change?")
  }

  faqPage.headers = Object.entries(faqPage.faqsByCategory)
    .reduce((headers, [category, faqs]) => {
      if (!headers.find(header => header.title === category)) {
        // Add category to markdown headings.
        headers.push({
          level: 2,
          title: category,
          slug: slugify(category),
        })
      }

      for (const faq of faqs) {
        // Add FAQ item to markdown headings.
        headers.push({
          level: 3,
          title: faq.question,
          slug: slugify(faq.question),
        })
      }

      return headers
    }, [])
}
