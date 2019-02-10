module.exports = {
  locales: {
    '/': {
      lang: 'en-US',
      title: 'Vue Community',
      description: 'The community guide to Vue.'
    }
  },
  serviceWorker: true,
  themeConfig: {
    docsDir: 'docs',
    repo: 'https://github.com/dobromir-hristov/vuecommunity',
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
            text: 'Contributing',
            link: '/contributing/'
          }
        ],
        sidebar: [
          '/',
          {
            title: 'Welcome to Vue',
            collapsable: false,
            children: [
              '/guide/community/conferences.md',
              '/guide/community/meetups.md',
              '/guide/community/social-media.md',
              '/guide/community/diversity.md',
              '/guide/community/job-market.md',
              '/guide/community/adopt-vue-at-work.md',
            ]
          },
          {
            title: 'Learning',
            collapsable: false,
            children: [
              '/guide/learning/official-documentation.md',
              '/guide/learning/blogs-and-articles.md',
              '/guide/learning/books.md',
              '/guide/learning/courses.md',
              '/guide/learning/faq.md',
              '/guide/learning/how-to-learn-vue.md',
              '/guide/learning/learning-platforms.md',
              '/guide/learning/podcasts.md',
              '/guide/learning/tips-from-mentors.md',
              '/guide/learning/workshops.md',
            ]
          },
          {
            title: 'Framework Ecosystem',
            collapsable: false,
            children: [
              '/guide/ecosystem/nuxt.md',
              '/guide/ecosystem/boilerplates.md',
              '/guide/ecosystem/ui-libraries.md',
              '/guide/ecosystem/mobile-apps.md',
              '/guide/ecosystem/build-tools.md',
              '/guide/ecosystem/desktop-apps.md',
              '/guide/ecosystem/documentation.md',
              '/guide/ecosystem/gridsome.md',
              '/guide/ecosystem/hosting.md',
              '/guide/ecosystem/forms.md',
              '/guide/ecosystem/server-side-rendering.md',
              '/guide/ecosystem/static-site-generators.md',
              '/guide/ecosystem/client-server-communication.md',
              '/guide/ecosystem/legacy.md',
            ]
          }
        ]
      }
    }
  }
}
