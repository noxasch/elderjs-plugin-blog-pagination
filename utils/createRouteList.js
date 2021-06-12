function createRouteList(data, postPerPage, route, template) {
  const postCount = data.markdown[route].length;
  let pages = Math.floor(postCount / postPerPage);
  let remainder = postCount % postPerPage;
  let slugList = [];
  if (remainder > 0) pages += 1;
  console.log(`elderjs-plugin-blog-pagination: Generating route for ${postCount} posts into ${pages} pages.`);
  if (pages > 1) {
    for (let i = 0; i < pages; i++) {
      if (i === 0) slugList.push({
        slug: route,
        page: i + 1,
        route: route,
        postStart: 0,
        postEnd: postPerPage,
        lastPage: pages,
        hasPrevious: false,
        hasNext: true,
        nextPage: { slug: `${route}/${i + 2}` },
        template: template
      });
      else slugList.push({
        slug: `${route}/${i + 1}`,
        page: i + 1,
        route: route,
        postStart: i * postPerPage,
        postEnd: (i * postPerPage) + postPerPage,
        lastPage: pages,
        hasPrevious: true,
        previousPage: { slug: `${route}/${(i - 1 === 0) ? '' : i}`, },
        hasNext: i !== pages - 1,
        nextPage: (i + 1 === pages) ? undefined : { slug: `${route}/${i + 2}` },
        template: template
      });
    }
  } else {
    slugList.push({
      slug: route,
      page: 1,
      route: route,
      postStart: 0,
      postEnd: postPerPage,
      lastPage: pages,
      hasPrevious: false,
      hasNext: false,
      template: template
    });
  }
  console.log(`elderjs-plugin-blog-pagination: Complete generating route for ${postCount} posts into ${pages} pages.`);
  return slugList;
}

module.exports = createRouteList;

