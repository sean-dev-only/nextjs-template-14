import type { MetadataRoute } from 'next'
import { SITEMAP_URL } from '@/constants/meta'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/', //TODO
      disallow: '/private/', //TODO
    },
    sitemap: SITEMAP_URL,
  }
}
