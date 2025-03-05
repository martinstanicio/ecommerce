import type { Metadata } from 'next'

export const siteName = 'Ecommerce'
export const title = 'Ecommerce CMS'
export const description = 'Plug and play ecommerce CMS.'
export const keywords = ['ecommerce', 'payload', 'cms', 'next.js', 'typescript', 'mongodb']

export const metadata: Metadata = {
  title: {
    template: `%s | ${siteName}`,
    default: `${title} | ${siteName}`,
  },
  description,
  keywords,
  creator: 'Martín Stanicio',
  generator: 'Next.js',
  openGraph: {
    siteName,
    title,
    description,
    type: 'website',
    locale: 'es',
    url: '/',
  },
}
