# Frequently Asked Questions

Below is a collection of the most commonly asked questions that new Vue developers have.

Answers may contain links to other Vue community pages, external articles and blog posts, or even links to specialized docs, where said feature is explained in detail.

::: warning
This page is still in early development. If you feel you can contribute, please don't hesitate to open a PR.
:::

<!--
  Contributors:

    The FAQs are now stored outside of the docs/ directory, in faqs/

    FAQS:   https://github.com/dobromir-hristov/vuecommunity/tree/master/faqs
    README: https://github.com/dobromir-hristov/vuecommunity/tree/master/faqs/README.md
-->

<faq-category v-for="(faqs, categoryName) in $page.faqsByCategory" :name="categoryName">
  <faq-item v-for="faq in faqs" v-bind="faq" />
</faq-category>
