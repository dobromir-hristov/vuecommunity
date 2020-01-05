<template>
  <section class="faq-category">
    <h2 :id="slugify(name)">
      <a :href="`#${slugify(name)}`" aria-hidden="true" class="header-anchor">#</a> {{ name }}
    </h2>

    <slot></slot>
  </section>
</template>

<script>
import slugify from '../../../plugins/faqs/utils/slugify'

export default {
  props: {
    name: {
      type: String,
      required: true
    }
  },
  methods: {
    slugify
  }
}
</script>
