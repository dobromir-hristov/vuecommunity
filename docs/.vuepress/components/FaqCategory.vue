<template>
  <section class="faq-category">
    <h2 :id="slug">
      <a :href="`#${slug}`" aria-hidden="true" class="header-anchor">#</a> {{ title }}
    </h2>

    <p v-if="description" v-text="description"></p>

    <slot></slot>
  </section>
</template>

<script>
import slugify from '../../../plugins/faqs/utils/slugify'

export default {
  props: {
    category: {
      type: String,
      required: true
    }
  },
  computed: {
    slug() {
      return slugify(this.category)
    },
    title() {
      return this.$page.categories[this.category].title
    },
    description() {
      return this.$page.categories[this.category].description
    }
  }
}
</script>
