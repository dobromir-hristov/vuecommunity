<template>
  <article class="faq">
    <h3 :id="slug">
      <a :href="`#${slug}`" aria-hidden="true" class="header-anchor">#</a> {{ question }}
    </h3>

    <main v-html="content"></main>

    <aside v-if="hasLinks">
      <useful-links>
        <useful-links-section v-for="(links, section) in links" :title="section">
          <ul>
            <li v-for="link in links">
              <a :href="link.href">{{ link.text }}</a>
            </li>
          </ul>
        </useful-links-section>
      </useful-links>
    </aside>

    <footer class="page-edit">
      <div class="edit-link">
        <a :href="editLink" target="_blank" rel="noopener noreferrer">
          Edit this FAQ item on Github
        </a>
        
        <OutboundLink />
      </div>
    </footer>
  </article>
</template>

<script>
import slugify from '../../../plugins/faqs/utils/slugify'

export default {
  props: {
    editLink: {
      type: String,
      required: true
    },
    question: {
      type: String,
      required: true
    },
    content: {
      type: String,
      required: true
    },
    links: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  computed: {
    slug() {
      return slugify(this.question)
    },
    hasLinks() {
      return this.links && Object.keys(this.links).length
    }
  }
}
</script>

<style scoped>
.page-edit {
  padding-left: 0;
}
</style>
