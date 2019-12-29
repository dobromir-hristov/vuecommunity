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
    .find(page => page.relativePath === 'guide/learning/faq.md')
  
  console.log(
    siteData.pages.map(({ path, relativePath, regularPath }) => ({ path, relativePath, regularPath }))
  )

  if ( ! faqPage) {
    throw new Error("The FAQ plugin couldn't find the FAQ page (guide/learning/faq.md)! Did its path change?")
  }

  faqPage.headers = faqPage.faqData
    .reduce((headers, faq) => {
      const category = faq.category || 'Uncategorised'

      // Add category to markdown headings.
      if (!headers.find(header => header.title === faq.category)) {
        headers.push({
          level: 2,
          title: category,
          slug: slugify(category),
        })
      }

      // Add FAQ item to markdown headings.
      headers.push({
        level: 3,
        title: faq.question,
        slug: slugify(faq.question),
      })

      return headers
    }, [])
}
