import * as nunjucks from 'nunjucks';

import indexHtml from "../views/index.html" with { type: "text" };

const render = () => {
  return async (c, next) => {
    c.render = async (pageName) => {
      const manifestFiles = c.get('manifest')
      const currentAssets = manifestFiles[pageName].initial;
      let assets = { js: [], css: [] };
      const cdnUrl = 'http://localhost:8080';
      if (currentAssets) {
        const { js, css } = currentAssets;
        for (let j of js) {
          assets.js.push(`${cdnUrl}${j}`)
        }
        for (let cs of css) {
          assets.css.push(`${cdnUrl}${cs}`)
        }
      }
      const html = nunjucks.renderString(indexHtml, {
        cssArray: assets.css,
        jsArray: assets.js
      });

      return c.html(html);
    }
    await next();
  };
};

export {
  render
};
