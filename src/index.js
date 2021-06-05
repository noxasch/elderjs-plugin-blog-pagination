const createRouteList = require('./utils/createRouteList');

const plugin = {
  name: 'elderjs-plugin-blog-pagination',
  description: `Generate pagination from markdown blog post`,
  init: async (plugin) => {
    return plugin;
  },
  hooks: [
    {
      hook: 'allRequests',
      name: 'AddIndexPaginationRequest',
      description: 'Generate pagination request object from markdown data',
      run: ({ plugin, data, allRequests, settings }) => {
        const hasPluginMarkdown = '@elderjs/plugin-markdown' in settings.plugins;
        const postPerPage = plugin.config.postPerPage;
        const routesList = plugin.config.routes;
        const template = plugin.config.indexTemplate;

        if (hasPluginMarkdown) {
          routesList.forEach((route) => {
            const slugList = createRouteList(data, postPerPage, route, template);
            allRequests = [...allRequests, ...slugList];
          });
        } else {
          console.log('elderjs-plugin-blog-pagination: Skipping pagination as @elderjs/plugin-markdown not detected in elderjs plugin.');
        }
        return { allRequests };
      }
    },
  ],
  config: {
    routes: ['blog'],
    postPerPage: 5,
    indexTemplate: 'BlogIndex',
    routeConfig: [ // default is routeConfig: [],
      {
        routes: ['blog'],
        postPerPage: 5,
        indexTemplate: 'BlogIndex', // if not supply use config.indexTemplate
      },
      {
        routes: ['travel'],
        postPerPage: 5,
        indexTemplate: 'TravelIndex',
      },
    ]
  },

};

module.exports = plugin;
