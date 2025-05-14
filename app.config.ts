import { defineAppConfig } from '#imports'

export default defineAppConfig({
  title: 'Hung\'s Link',
  email: 'ngnamhung99@gmail.com',
  github: 'https://github.com/namxhung99',
  twitter: 'https://twitter.com/',
  telegram: 'https://telegram.com/',
  description: 'Hung\'s Link Shortener and QR code Generate',
  image: 'https://sink.cool/banner.png',
  previewTTL: 300, // 5 minutes
  slugRegex: /^[a-z0-9]+(?:-[a-z0-9]+)*$/i,
  reserveSlug: [
    'dashboard',
  ],
})
