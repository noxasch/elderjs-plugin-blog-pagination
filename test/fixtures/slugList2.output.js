const config = require('./config');

const postPerPage = config.postPerPage;
const template = config.indexTemplate;
const route = config.routes[1];
const pages = 1;

const slugList2 = [
  {
    slug: 'blog',
    page: 1,
    route: route,
    postStart: 0,
    postEnd: postPerPage,
    lastPage: pages,
    hasPrevious: false,
    hasNext: false,
    template: template
  },
];

module.exports = slugList2;
