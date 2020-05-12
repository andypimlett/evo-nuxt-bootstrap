<template>
  <div>
    <div class="grid grid-cols-12 gap-4 pt-20 pb-20">
      <div v-for="blog in blogs" :key="blog.id" class="col-span-10 col-start-2">
        <h1 class="mb-6 text-5xl font-thin text-gray-800 font-headings">
          <NuxtLink :to="'/blog/' + blog.slug" class="underline">
            {{ blog.title }}
          </NuxtLink>
        </h1>
        <rte :content="blog.body" />
      </div>
    </div>
  </div>
</template>

<script>
import rte from '@/components/RichText.vue'

export default {
  components: {
    rte
  },
  async asyncData(context) {
    return {
      blogs: await context.app.contentfulClient.getblogs()
    }
  }
}
</script>
