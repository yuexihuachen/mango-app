import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';

export default defineConfig({
  server: {
    port: 8080,
    publicDir: {
      watch: true
    }
  },
  dev: {
    client: {
       protocol: 'ws',
      // 通常使用 `127.0.0.1`，可以避免跨域请求被浏览器拦截
      host: '127.0.0.1',
      port: 8080,
    }
  },
  output: {
    cleanDistPath: true,
    sourceMap: {
      js: process.env.NODE_ENV === 'production' ?'source-map' : 'cheap-module-source-map',
      css: true,
    },
    distPath: {
      root: "../server/manifest"
    },
    manifest: true
  },
  performance: {
      chunkSplit: {
      strategy: 'single-vendor',
    },
  },
  plugins: [pluginReact()],
});
