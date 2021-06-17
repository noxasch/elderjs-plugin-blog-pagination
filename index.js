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
        const createRouteList = require('./utils/createRouteList');
        const hasPluginMarkdown = '@elderjs/plugin-markdown' in settings.plugins;
        const postPerPage = plugin.config.postPerPage;
        const routesList = plugin.config.routes;
        const template = plugin.config.indexTemplate;

        if (hasPluginMarkdown && plugin.config.routes.length > 0 && plugin.config.indexTemplate) {
          routesList.forEach((route) => {
            const slugList = createRouteList(data, postPerPage, route, template);
            allRequests = [...allRequests, ...slugList];
          });
        } else {
          if (!hasPluginMarkdown)
            console.log('elderjs-plugin-blog-pagination: Skipping pagination as @elderjs/plugin-markdown not detected in elderjs plugin.');
          if (plugin.config.routes.length > 0)
            console.log('elderjs-plugin-blog-pagination: No routes specified');
          if (plugin.config.indexTemplate)
            console.log(`elderjs-plugin-blog-pagination: No template specified.`);
        } 
        return { allRequests };
      }
    },
  ],
  config: {
    routes: [],
    postPerPage: 5,
    indexTemplate: '',
  },

};

module.exports = plugin;
