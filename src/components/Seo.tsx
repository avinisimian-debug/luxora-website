import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { BRAND, CONTACT } from '../data/content'
import {
  DEFAULT_SEO,
  OG_IMAGE_PATH,
  SEO_KEYWORDS,
  SEO_PAGES,
  SITE_NAME,
  SITE_URL,
} from '../data/seo'

function upsertMeta(
  attr: 'name' | 'property',
  key: string,
  content: string,
) {
  const selector = `meta[${attr}="${key}"]`
  let el = document.head.querySelector(selector) as HTMLMetaElement | null
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.content = content
}

function upsertLink(rel: string, href: string) {
  let el = document.head.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement | null
  if (!el) {
    el = document.createElement('link')
    el.rel = rel
    document.head.appendChild(el)
  }
  el.href = href
}

function upsertJsonLd(id: string, data: Record<string, unknown>) {
  let el = document.getElementById(id) as HTMLScriptElement | null
  if (!el) {
    el = document.createElement('script')
    el.id = id
    el.type = 'application/ld+json'
    document.head.appendChild(el)
  }
  el.textContent = JSON.stringify(data)
}

function buildBusinessJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'HomeAndConstructionBusiness',
    '@id': `${SITE_URL}/#business`,
    name: SITE_NAME,
    alternateName: [BRAND.nameHe, BRAND.nameEn],
    description: BRAND.intro,
    url: SITE_URL,
    image: `${SITE_URL}${OG_IMAGE_PATH}`,
    logo: `${SITE_URL}/images/logo-luxora.jpg`,
    email: CONTACT.email,
    telephone: `+972${CONTACT.phoneTel.slice(1)}`,
    areaServed: {
      '@type': 'Country',
      name: 'IL',
    },
    serviceType: [BRAND.field, 'תכנון מטבח', 'נגרות בהתאמה אישית'],
    sameAs: [],
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: `+972${CONTACT.phoneTel.slice(1)}`,
        contactType: 'customer service',
        availableLanguage: ['Hebrew', 'he'],
        areaServed: 'IL',
      },
    ],
  }
}

function buildWebSiteJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    name: SITE_NAME,
    url: SITE_URL,
    inLanguage: 'he-IL',
    publisher: { '@id': `${SITE_URL}/#business` },
  }
}

function buildWebPageJsonLd(title: string, description: string, path: string) {
  const url = `${SITE_URL}${path === '/' ? '/' : path}`
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${url}#webpage`,
    url,
    name: title,
    description,
    isPartOf: { '@id': `${SITE_URL}/#website` },
    about: { '@id': `${SITE_URL}/#business` },
    inLanguage: 'he-IL',
  }
}

/** Per-route title, meta, Open Graph, Twitter, canonical, JSON-LD. */
export function Seo() {
  const { pathname } = useLocation()
  const page = SEO_PAGES[pathname] ?? DEFAULT_SEO
  const canonical = `${SITE_URL}${page.path === '/' ? '/' : page.path}`
  const ogImage = `${SITE_URL}${OG_IMAGE_PATH}`

  useEffect(() => {
    document.title = page.title
    document.documentElement.lang = 'he'

    upsertMeta('name', 'description', page.description)
    upsertMeta('name', 'keywords', page.keywords ?? SEO_KEYWORDS)
    upsertMeta('name', 'robots', 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1')
    upsertMeta('name', 'googlebot', 'index, follow')
    upsertMeta('name', 'author', SITE_NAME)
    upsertMeta('name', 'geo.region', 'IL')
    upsertMeta('name', 'geo.placename', 'Israel')
    upsertMeta('name', 'language', 'Hebrew')

    upsertMeta('property', 'og:site_name', SITE_NAME)
    upsertMeta('property', 'og:locale', 'he_IL')
    upsertMeta('property', 'og:type', 'website')
    upsertMeta('property', 'og:title', page.title)
    upsertMeta('property', 'og:description', page.description)
    upsertMeta('property', 'og:url', canonical)
    upsertMeta('property', 'og:image', ogImage)
    upsertMeta('property', 'og:image:alt', BRAND.field)

    upsertMeta('name', 'twitter:card', 'summary_large_image')
    upsertMeta('name', 'twitter:title', page.title)
    upsertMeta('name', 'twitter:description', page.description)
    upsertMeta('name', 'twitter:image', ogImage)

    upsertLink('canonical', canonical)

    upsertJsonLd('luxora-ld-business', buildBusinessJsonLd())
    upsertJsonLd('luxora-ld-website', buildWebSiteJsonLd())
    upsertJsonLd(
      'luxora-ld-webpage',
      buildWebPageJsonLd(page.title, page.description, page.path),
    )
  }, [page, canonical, ogImage])

  return null
}
