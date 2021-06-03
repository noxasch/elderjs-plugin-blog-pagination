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
      run: ({ data, allRequests, settings }) => {
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
          console.error('Skipping pagination@elderjs/plugin-markdown no detected in elderjs plugin.');
        }
        return { allRequests };
      }
    },
  ],
  config: {
    routes: ['blog'],
    postPerPage: 5,
    indexTemplate: 'BlogIndex'
  },

};

module.exports = plugin;
