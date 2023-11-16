import react from '@astrojs/react'
import sitemap from '@astrojs/sitemap'
import pandacss from '@pandacss/astro'
import { defineConfig } from 'astro/config'
import { SITE_URL } from './src/data/config'

// https://astro.build/config
export default defineConfig({
  site: SITE_URL,
  markdown: {
    syntaxHighlight: 'shiki',
    shikiConfig: {
      theme: 'nord',
      wrap: false,
    },
  },
  integrations: [
    sitemap(),
    react(),
    pandacss(),
  ],
})
