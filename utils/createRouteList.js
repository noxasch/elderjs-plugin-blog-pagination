function createRouteList(data, postPerPage, route, template) {
  const postCount = data.markdown[route].length;
  let pages = Math.floor(postCount / postPerPage);
  let remainder = postCount % postPerPage;
  let slugList = [];
  if (remainder > 0) pages += 1;
  if (pages > 1) {
    for (let i = 0; i < pages; i++) {
      if (i === 0) slugList.push({
        slug: 'blog',
        route: route,
        postStart: 0,
        postEnd: postPerPage,
        lastPage: pages,
        hasPrevious: false,
        hasNext: true,
        nextPage: { slug: `blog/${i + 2}` },
        template: template
      });
      else slugList.push({
        slug: `blog/${i + 1}`,
        page: i + 1,
        route: route,
        postStart: i * postPerPage,
        postEnd: (i * postPerPage) + postPerPage,
        lastPage: pages,
        hasPrevious: true,
        previousPage: { slug: `blog/${(i - 1 === 0) ? '' : i}`, },
        hasNext: i !== pages - 1,
        nextPage: { slug: `blog/${(i + 1 === pages) ? '' : i + 2}` },
        template: template
      });
    }
  } else {
    slugList.push({
      slug: 'blog',
      route: route,
      postStart: 0,
      postEnd: postPerPage,
      lastPage: pages,
      hasPrevious: false,
      hasNext: false,
      template: template
    });
  }
  return slugList;
}

module.exports = createRouteList;
exports.default = createRouteList;
