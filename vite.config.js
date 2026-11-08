import { mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import { routes } from './src/routes.js'
import { headHtml, sitemapXml } from './src/seo.js'

// Writes dist/<path>/index.html per route with its <html lang>, title and head tags (see
// src/seo.js), dist/404.html for unknown paths, and the sitemap from the same route table.
function staticHeads() {
  let outDir
  const render = (template, path) => {
    const head = headHtml(path)
    return template
      .replace(/<html lang="[^"]*">/, `<html lang="${head.lang}">`)
      .replace(/<title>[^<]*<\/title>/, `<title>${head.title}</title>`)
      .replace('<!-- head:managed -->', head.html)
  }
  return {
    name: 'static-heads',
    apply: 'build',
    configResolved(config) {
      outDir = config.build.outDir
    },
    closeBundle() {
      const template = readFileSync(join(outDir, 'index.html'), 'utf8')
      for (const route of routes) {
        const dir = join(outDir, route.path)
        mkdirSync(dir, { recursive: true })
        writeFileSync(join(dir, 'index.html'), render(template, route.path))
      }
      writeFileSync(join(outDir, '404.html'), render(template, '/404'))
      writeFileSync(join(outDir, 'sitemap.xml'), sitemapXml())
    },
  }
}

export default defineConfig({
  plugins: [vue(), staticHeads()],
})
