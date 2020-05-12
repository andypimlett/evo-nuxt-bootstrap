<template>
  <div>
    <div class="grid grid-cols-12 gap-0 pb-20">
      <div class="col-span-12 lg:mb-10 lg:col-span-8">
        <img v-if="blog.heroImage" :src="blog.heroImage" class="mb-20" />
        <h1
          class="p-5 mb-2 text-3xl font-thin leading-tight lg:p-0 text-brand-one lg:text-4xl font-headings"
        >
          {{ blog.title }}
        </h1>
        <div class="col-span-12 p-10 lg:p-0 lg:col-span-7 lg:col-start-3">
          <rte :content="blog.description" />
        </div>
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
      blog: await context.app.contentfulClient.getBlog(context.params.id)
    }
  }
}
</script>
