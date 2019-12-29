# Frequently Asked Questions

Below is a collection of the most commonly asked questions that new Vue developers have.

Answers may contain links to other Vue community pages, external articles and blog posts, or even links to specialized docs, where said feature is explained in detail.

::: warning
This page is still in early development. If you feel you can contribute, please don't hesitate to open a PR.
:::


<!--
  Contributors:

    The FAQs are now stored outsode of the docs/ directory, in faqs/

    FAQS:   https://github.com/dobromir-hristov/vuecommunity/tree/master/faqs
    README: https://github.com/dobromir-hristov/vuecommunity/tree/master/faqs/README.md
-->

<faq-category v-for="(faqs, categoryName) in faqsByCategory" :name="categoryName">
  <faq-item v-for="faq in faqs" v-bind="faq" />
</faq-category>

<script>
export default {
  computed: {
    faqsByCategory() {
      return (this.$page.faqData || [])
        .reduce((categories, page) => {
          const category = page.category || 'Uncategorised'
          if ( ! categories[category]) {
            categories[category] = []
          }
          categories[category].push(page)
          return categories
        }, {})
    }
  },
}
</script>

<style>
/*
  HACK: Without this the headings are hidden behind the navigation, this 
        snippet is taken from the live site. It has something to do with a 
        `.custom` CSS class. I don't understand it. There must be a better way?
*/
h1, h2, h3, h4, h5, h6 {
  margin-top: -3.1rem;
  padding-top: 4.6rem;
  margin-bottom: 0;
}
</style>
