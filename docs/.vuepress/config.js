const autometaOptions = {
  image: false,
  site: {
    name: 'Vue Community'
  },
  canonical_base: 'https://vue-community.org'
}

module.exports = {
  locales: {
    '/': {
      lang: 'en-US',
      title: 'Vue Community',
      description: 'The community guide to Vue.js'
    }
  },
  plugins: [
    [
      '@vuepress/google-analytics',
      {
        'ga': 'UA-29425482-12'
      }
    ],
    [
      'container',
      {
        type: 'contribute',
        before: () => `<div class="tip custom-block">
          <p><strong>This section could use a little bit of love.</strong></p>
          <p>If you're able to, please consider helping the Vue Community by contributing a PR.</p>
          <p>You'll find a link to edit this page at the bottom.</p>`
        ,
        after: '</div>'
      }
    ],
    ['autometa', autometaOptions]
  ],
  // serviceWorker: true,
  themeConfig: {
    algolia: {
      apiKey: '8c789b5d0ee680a4a383673877be347d',
      indexName: 'vue-community'
    },
    logo: '/logo_pin.png',
    docsDir: 'docs',
    repo: 'https://github.com/dobromir-hristov/vuecommunity',
    editLinks: true,
    sidebarDepth: 3,
    locales: {
      '/': {
        label: 'English',
        selectText: 'Languages',
        editLinkText: 'Edit this page on GitHub',
        nav: [
          {
            text: 'Guide',
            link: '/guide/'
          },
          {
            text: 'Multilingual Resources',
            items: [
              { text: 'Spanish', link: '/multilingual/spanish.md' }
            ]
          },
          {
            text: 'Contributing',
            link: '/contributing/'
          }
        ],
        sidebar: [
          '/',
          {
            title: 'Community',
            collapsable: false,
            children: [
              '/guide/community/conferences.md',
              '/guide/community/meetups.md',
              '/guide/community/social-media.md',
              '/guide/community/diversity.md',
              '/guide/community/job-market.md',
              '/guide/community/adopt-vue-at-work.md',
              '/guide/community/vue-3.md'
            ]
          },
          {
            title: 'Learning',
            collapsable: false,
            children: [
              '/guide/learning/official-documentation.md',
              '/guide/learning/how-to-learn-vue.md',
              '/guide/learning/learning-platforms.md',
              '/guide/learning/courses.md',
              '/guide/learning/books.md',
              '/guide/learning/blogs.md',
              '/guide/learning/faq.md',
              '/guide/learning/podcasts.md',
              '/guide/learning/tips-from-mentors.md',
              '/guide/learning/workshops.md'
            ]
          },
          {
            title: 'Ecosystem',
            collapsable: false,
            children: [
              '/guide/ecosystem/editors-and-tools.md',
              '/guide/ecosystem/ui-libraries.md',
              '/guide/ecosystem/forms.md',
              '/guide/ecosystem/boilerplates.md',
              '/guide/ecosystem/client-server-communication.md',
              '/guide/ecosystem/documentation.md',
              '/guide/ecosystem/hosting.md',
              '/guide/ecosystem/i18n.md',
              '/guide/ecosystem/mobile-apps.md',
              '/guide/ecosystem/desktop-apps.md',
              '/guide/ecosystem/nuxt.md',
              '/guide/ecosystem/server-side-rendering.md',
              '/guide/ecosystem/static-site-generators.md',
              '/guide/ecosystem/build-tools.md',
              '/guide/ecosystem/projects-worth-mentioning.md',
              '/guide/ecosystem/legacy.md'
            ]
          }
        ]
      }
    }
  },
  head: [
    ['link', { rel: 'apple-touch-icon', sizes: '180x180', href: '/favicons/apple-touch-icon.png' }],
    ['link', { rel: 'icon', type: 'image/,png', sizes: '32x32', href: '/favicons/favicon-32x32.png' }],
    ['link', { rel: 'icon', type: 'image/,png', sizes: '16x16', href: '/favicons/favicon-16x16.png' }],
    ['link', { rel: 'manifest', href: '/favicons/site.webmanifest' }],
    ['link', { rel: 'mask-icon', href: '/favicons/safari-pinned-tab.svg', color: '#5bbad5' }],
    ['link', { rel: 'shortcut icon', href: '/favicons/favicon.ico' }],
    ['meta', { name: 'msapplication-TileColor', content: '#ffffff' }],
    ['meta', { name: 'msapplication-config', content: '/favicons/browserconfig.xml' }],
    ['meta', { name: 'theme-color', content: '#ffffff' }],
    ['meta', { property: 'og:image', content: '/cover.png' }],
    ['meta', { property: 'twitter:image', content: '/cover.png' }]
  ]
}
