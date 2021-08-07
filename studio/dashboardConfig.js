export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '610f1d58217563f7ef6a014e',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-fffdy39q',
                  apiId: '9ed31c4f-9b1c-4d73-a4e1-1a067f17776b'
                },
                {
                  buildHookId: '610f1d58a0112cc63621b3dd',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-3a58mc85',
                  apiId: 'acb1306a-31f2-4887-9f4b-60d8bf2ef647'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/jpotvin-ezpz/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-3a58mc85.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
