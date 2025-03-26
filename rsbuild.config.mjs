import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';

export default defineConfig({
  plugins: [pluginReact()],
  source: {
    tsconfigPath: './tsconfig.json',
    define: {
      'process.env.API_URL': JSON.stringify(process.env.API_URL),
    },
  },
  output: {
    assetPrefix: '/mango-app/'
  },
  html: {
    title: '笔记',
    favicon: 'https://cdn.jsdelivr.net/gh/yuexihuachen/CDN/favicon-32x32.png',
  },
});
