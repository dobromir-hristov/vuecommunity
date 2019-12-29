const { resolve, join, basename } = require('path')
const { readdirSync, readFileSync, existsSync, lstatSync } = require('fs')
const { logger } = require('@vuepress/shared-utils')
const { gray, magenta } = require('chalk')
const YAML = require('yaml-front-matter')

module.exports = options => {
  let faqData = []
  const basePath = resolve(options.basePath || './faqs')

  if (!existsSync(basePath)) {
    logger.error(`FAQ directory ${magenta(basePath)} does not exist!`)
    return
  }

  logger.info(`FAQ Plugin ${gray('Loading and processing FAQs.')}`)

  try {
    faqData = readdirSync(basePath)
      .filter(path => lstatSync(join(basePath, path)).isDirectory()) // Filter out non-directories.
      .reduce((faqs, directory) => {
        const dirPath = join(basePath, directory)
        const files = readdirSync(dirPath)
          .map(fileName => join(dirPath, fileName))
          .map(readFileContents)
          .map(extractFrontMatter)
          .map(faq => makePathsRelative(faq, basePath)) // Make paths relative again (for Github edit links).
          .filter(validateFAQs)

        faqs.push(...files)
        return faqs
      }, [])
  }
  catch(e) {
    logger.error(e)
  }

  logger.info(`FAQ Plugin ${gray('...done!')}`)

  return {
    md: null,
    // Acquire internal markdown-it instance.
    extendMarkdown(md) {
      this.md = md
    },
    // Expose FAQ data to FAQ page.
    extendPageData(page) {
      if (page.path && page.path.startsWith('/guide/learning/faq')) {
        page.faqData = faqData.map(faq => {
          faq.content = this.md.render(faq.content).html
          return { ...faq }
        })
      }
    },
    // Generate markdown headings and inject slugify method.
    enhanceAppFiles: resolve(__dirname, 'enhance.js')
  }
}

function readFileContents(fileName) {
  return {
    path: fileName,
    contents: readFileSync(fileName, { encoding: 'utf8' })
  }
}

function makePathsRelative(entry, basePath) {
  entry.path = join('faqs', entry.path.replace(basePath, ''))
  return entry
}

function extractFrontMatter({ path, contents }) {
  return {
    path,
    ...YAML.safeLoadFront(contents, { contentKeyName: 'content' })
  }
}

function validateFAQs(faq) {
  const fileName = basename(faq.path)

  if ( ! faq.question) {
    logger.warn(`FAQ Plugin ${magenta(fileName)} ${gray('Required field "question" missing - skipping!')}`)
    return false
  }

  if ( ! faq.category) {
    logger.warn(`FAQ Plugin ${magenta(fileName)} ${gray('Recommended field "category" missing - defaulting!')}`)
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