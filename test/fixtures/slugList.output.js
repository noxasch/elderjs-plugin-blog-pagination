const config = require('./config');

const postPerPage = config.postPerPage;
const template = config.indexTemplate;
const route = config.routes[0];
const pages = 4;

const slugList = [
  {
    slug: 'blog',
    route: route,
    postStart: 0,
    postEnd: postPerPage,
    lastPage: pages,
    hasPrevious: false,
    hasNext: true,
    nextPage: { slug: `blog/2` },
    template: template
  },
  {
    slug: `blog/2`,
    page: 2,
    route: route,
    postStart: 1 * postPerPage,
    postEnd: (1 * postPerPage) + postPerPage,
    lastPage: pages,
    hasPrevious: true,
    previousPage: { slug: `blog/`, },
    hasNext: true,
    nextPage: { slug: `blog/3` },
    template: template
  },
  {
    slug: `blog/3`,
    page: 3,
    route: route,
    postStart: 2 * postPerPage,
    postEnd: (2 * postPerPage) + postPerPage,
    lastPage: pages,
    hasPrevious: true,
    previousPage: { slug: `blog/2`, },
    hasNext: true,
    nextPage: { slug: `blog/4` },
    template: template
  },
  {
    slug: `blog/4`,
    page: 4,
    route: route,
    postStart: 3 * postPerPage,
    postEnd: (3 * postPerPage) + postPerPage,
    lastPage: pages,
    hasPrevious: true,
    previousPage: { slug: `blog/3`, },
    hasNext: false,
    nextPage: { slug: `blog/` },
    template: template
  }
];

module.exports = slugList;
