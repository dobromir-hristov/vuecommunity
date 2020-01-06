const { resolve, join, basename, normalize } = require('path')
const { readdirSync, readFileSync, existsSync, lstatSync } = require('fs')
const { logger } = require('@vuepress/shared-utils')
const { gray, cyan, magenta } = require('chalk')
const YAML = require('yaml-front-matter')

module.exports = options => {
  let faqData = []
  const faqsBase = options.faqsBase
  const basePath = resolve(faqsBase || './faqs')
  const githubRepo = normalize(`${options.githubRepo}/`)
  
  const categories = options.categories
  if (!categories.uncategorised) {
    categories.uncategorised = { title: 'Uncategorised' }
  }
  const categoryNames = Object.keys(categories)

  if (!existsSync(basePath)) {
    logger.error(`FAQ directory ${magenta(basePath)} does not exist!`)
    return
  }

  logger.info(`FAQ Plugin ${cyan('Loading and processing FAQs.')}`)

  try {
    faqData = readdirSync(basePath)
      .filter(path => lstatSync(join(basePath, path)).isDirectory()) // Filter out non-directories.
      .sort(sortCategories(categoryNames, categories))
      .reduce((faqs, directory) => {
        const dirPath = join(basePath, directory)
        const files = readdirSync(dirPath)
          .map(fileName => join(dirPath, fileName))
          .map(readFileContents)
          .map(faq => addPathsAndLinks(faq, basePath, faqsBase, githubRepo))
          .map(faq => addCategories(faq, directory))
          .map(extractFrontMatter)
          .filter(faq => validateFAQs(faq, categoryNames))

        faqs.push(...files)
        return faqs
      }, [])
  }
  catch(e) {
    logger.error(e)
  }

  logger.info(`FAQ Plugin ${cyan('...done!')}`)

  return {
    md: null,
    // Acquire internal markdown-it instance.
    extendMarkdown(md) {
      this.md = md
    },
    // Expose FAQ data to FAQ page.
    extendPageData(page) {
      if (page.path && page.path.startsWith('/guide/learning/faq')) {
        faqData = faqData.map(faq => {
          faq.content = this.md.render(faq.content).html
          return { ...faq }
        })

        page.categories = categories

        page.faqsByCategory = faqData.reduce((cats, page) => {
          const category = page.category || 'uncategorised'
          if (!cats[category]) {
            cats[category] = []
          }
          cats[category].push(page)
          return cats
        }, {})
      }
    },
    // Generate markdown headings and inject slugify method.
    enhanceAppFiles: resolve(__dirname, 'enhance.js')
  }
}

function readFileContents(fileName) {
  return {
    fileName,
    contents: readFileSync(fileName, { encoding: 'utf8' })
  }
}

function addPathsAndLinks(entry, basePath, faqsBase, githubRepo) {
  entry.editLink = join(githubRepo, '/edit/master/', entry.fileName.replace(basePath, faqsBase))
  entry.fileName = basename(entry.fileName)
  return entry
}

function addCategories(entry, category) {
  entry.category = category
  return entry
}

function extractFrontMatter({ editLink, fileName, category, contents }) {
  return {
    editLink,
    fileName,
    ...YAML.safeLoadFront(contents, { contentKeyName: 'content' }),
    category
  }
}

function sortCategories(categoryNames, categories) {
  return (a, b) => categoryNames.indexOf(a) - categoryNames.indexOf(b)
}

function validateFAQs(faq, categories) {
  const { fileName } = faq

  if ( ! faq.question) {
    logger.warn(`FAQ Plugin ${magenta(fileName)} ${gray('Required field "question" missing - skipping!')}`)
    return false
  }

  if ( ! categories.includes(faq.category)) {
    logger.warn(`FAQ Plugin ${magenta(fileName)} Unknown category ${cyan(faq.category)} ${gray('Did you make a typo or forget to define it docs/.vuepress/config.js?')}`)
    return false
  }

  if (faq.links) { 
    if (
      (typeof faq.links) !== 'object' || 
      Array.isArray(faq.links) || 
      !Object.values(faq.links).every(link => !link || !link.href || !link.text)
    ) {
      logger.warn(`FAQ Plugin ${magenta(fileName)} ${gray('Optional field "links" is invalid - removing!')}`)
      faq.links = []
    }
  }

  return true
}
