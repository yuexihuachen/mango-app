import { env } from 'hono/adapter'

import manifest from "../../manifest/manifest.json" with { type: "json" };

const bundle = () => {
  return async (c, next) => {
    const { NODE_ENV } = env<{ NAME: string }>(c);
    const isDev = NODE_ENV !== 'production';
    let manifestFile = manifest;
    let assets = {
      js: [],
      css: []
    }
    if (isDev) {
      const cdnUrl = 'http://localhost:8080';
      const filePath = Bun.resolveSync("./manifest/manifest.json", process.cwd());
      const file = Bun.file(filePath);
      manifestFile = await file.json();
      if (manifestFile?.entries?.index?.initial) {
        const source = manifestFile.entries.index.initial;
        for (let js of source.js) {
          assets.js.push(`${cdnUrl}${js}`)
        }
        for (let css of source.css) {
          assets.css.push(`${cdnUrl}${css}`)
        }
      }
    } else {
      assets = manifestFile.entries.index.initial;
    }
    c.set('manifest', assets);
    await next();
  };
};

export {
  bundle
};
