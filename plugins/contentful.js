// First we import the contentful node module
import * as contentful from 'contentful'
import { documentToHtmlString } from '@contentful/rich-text-html-renderer'
const { richTextFromMarkdown } = require('@contentful/rich-text-from-markdown')

// Those are set via `env` property in nuxt.config.js or environment variables
const config = {
  space: process.env.NUXT_ENV_CONTENTFUL_SPACE,
  accessToken: process.env.NUXT_ENV_CONTENTFUL_ACCESS_TOKEN
}

// Create a client to setup fetching content
const client = contentful.createClient(config)

client.getBlog = async (slug) => {
  try {
    const blog = await client.getEntries({
      content_type: 'blogPost',
      'fields.slug': slug
    })

    // Convert markdiwn to rick text
    const richText = await richTextFromMarkdown(blog.items[0].fields.body)

    // Create string from rich text
    const description = await documentToHtmlString(richText)

    // Get an asset from an id
    let heroImage
    if (blog.items[0].fields.heroImage) {
      try {
        const imageAsset = await client.getAsset(
          blog.items[0].fields.heroImage.sys.id
        )
        heroImage = imageAsset.fields.file.url
      } catch (error) {
        heroImage = ''
      }
    }

    return {
      title: blog.items[0].fields.title,
      heroImage,
      description
    }
  } catch (error) {
    console.error(error)
  }
}

client.getblogs = async () => {
  const blogs = await client.getEntries({ content_type: 'blogPost' })

  return blogs.items.map((blog) => {
    const richText = documentToHtmlString(blog.fields.body)
    return {
      title: blog.fields.title,
      slug: blog.fields.slug,
      body: richText
    }
  })
}

export default ({ app }) => {
  // Add the function directly to the context.app object
  app.contentfulClient = client
}
