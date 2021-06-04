const config = require('./config');

const postPerPage = config.postPerPage;
const template = config.indexTemplate;
const route = config.routes[0];
const route2 = config.routes[1];
const pages = 4;

const slugList = [
  {
    slug: `${route}`,
    page: 1,
    route: route,
    postStart: 0,
    postEnd: postPerPage,
    lastPage: pages,
    hasPrevious: false,
    hasNext: true,
    nextPage: { slug: `${route}/2` },
    template: template
  },
  {
    slug: `${route}/2`,
    page: 2,
    route: route,
    postStart: 1 * postPerPage,
    postEnd: (1 * postPerPage) + postPerPage,
    lastPage: pages,
    hasPrevious: true,
    previousPage: { slug: `${route}/`, },
    hasNext: true,
    nextPage: { slug: `${route}/3` },
    template: template
  },
  {
    slug: `${route}/3`,
    page: 3,
    route: route,
    postStart: 2 * postPerPage,
    postEnd: (2 * postPerPage) + postPerPage,
    lastPage: pages,
    hasPrevious: true,
    previousPage: { slug: `${route}/2`, },
    hasNext: true,
    nextPage: { slug: `${route}/4` },
    template: template
  },
  {
    slug: `${route}/4`,
    page: 4,
    route: route,
    postStart: 3 * postPerPage,
    postEnd: (3 * postPerPage) + postPerPage,
    lastPage: pages,
    hasPrevious: true,
    previousPage: { slug: `${route}/3`, },
    hasNext: false,
    nextPage: undefined,
    template: template
  },
  {
    slug: route2,
    page: 1,
    route: route2,
    postStart: 0,
    postEnd: postPerPage,
    lastPage: 1,
    hasPrevious: false,
    hasNext: false,
    template: template
  },
];

module.exports = slugList;
