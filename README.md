# evo-nuxt-bootstrap

> Contentful, Tailwind & Nuxt (VueJS) Accelerator

## Environment Variables
Contentful requires API keys for accessing the demo content. Create a .env file in the root of the cloned repo and add:

`
BASE_URL=http://localhost:3000
NUXT_ENV_CONTENTFUL_SPACE=zvbcdzdlhq84
NUXT_ENV_CONTENTFUL_ACCESS_TOKEN=LN5wNsUfk9V1BEb-uyaH2NIbtrU1vmMOuSdTWmv8uTo
`

N.B - .env should never be commited; instead pass env keys via CI deployment pipe.

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).
