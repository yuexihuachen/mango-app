import type { Context, Next } from 'hono';
import nunjucks from 'nunjucks';

import manifest from "../../manifest/manifest.json" with { type: "json" };
import indexHtml from "../views/index.html" with { type: "text" };

const render = () => {
  return async (c: Context, next: Next) => {
    c.render = async () => {
      const { entries } = (manifest);

      const { js = [], css = [] } = entries['index'].initial;

      const scriptTags = js
        .map((url: string) => `<script src="${url}" defer async></script>`)
        .join('\n');
      const styleTags = css
        .map((file: string) => `<link rel="stylesheet" href="${file}">`)
        .join('\n');

      const html = nunjucks.renderString(indexHtml, {
        scriptTags,
        styleTags
      });

      return c.html(html);
    }
    await next();
  };
};

export {
  render
};
