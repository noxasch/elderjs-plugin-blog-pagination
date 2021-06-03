# Elder.js Plugin: elderjs-plugin-blog-pagination

Generate pagination from @elderjs/plugin-markdown

## Prerequisite

Currently this plugin only support post generate by @elderjs/plugin-markdown

```
npm install --save @elderjs/plugin-markdown
```

## Install

```bash
npm i -s elderjs-plugin-blog-pagination
```

## Config

Once installed, open your `elder.config.js` and configure the plugin by adding `elderjs-plugin-blog-pagination` to your plugin object.

```javascript
plugins: {
  'elderjs-plugin-blog-pagination': {
    routes: ['blog'], // change to your blog route
    postPerPage: 5, // change to your preferred post per apge
    indexTemplate: 'BlogIndex' // change to your own Index.svelte template but without `.svelte`
  },
}
```

## Blog route.js

As of current state, i have no idea how to override the permalink function, so you have to copy and paste this code into your `route.js`.

```js
module.exports = {
  template: 'Blog.svelte',
  permalink: ({ request, settings }) => {
    if (request.slug.includes('blog'))
      return `${request.slug}`;
    return `/blog/${request.slug}/`;
  },
  all: () => [],
  data: {},
};
```

## Using inside your BlogIndex.svelte and Pagination.svelte

```html
<!-- BlogIndex.svelte -->
<script>
  import Pagination from '../../components/Pagination.svelte';
  export let data, request, helpers;
</script>

<Pagination {data} {request} {helpers} />
```


```html
<!-- Pagination.svelte -->
<script>
  export let request, helpers;
</script>

<div class="pagination">
    {#if request.hasPrevious }
      <a href="{helpers.permalinks.blog(request.previousPage)}" class="prev">&lsaquo;</a>
    {/if}
    Page {#if request.page === undefined} 1 {:else} {parseInt(request.page)} {/if} / {request.lastPage}
    {#if request.hasNext}
      <a href="{helpers.permalinks.blog(request.nextPage)}" class="next">&rsaquo;</a>
    {/if}
</div>
```

## Pull Request

If you have any idea on how to support other than `@elderjs/plugin-markdown` output, feel free to create pull request.

## TODO

- [ ] add unit test
- [ ] add github action
