<template>
  <div>
    <header class="flex p-5 bg-brand-one md:bg-transparent md:p-10">
      <div class="flex-shrink">
        <Logo />
      </div>
      <nav class="invisible w-2/4 ml-auto lg:visible">
        <ul class="flex justify-end">
          <li class="mr-10">
            <NuxtLink to="/" class="text-grey-600">
              Home
            </NuxtLink>
          </li>
          <li class="mr-10">
            <NuxtLink to="/blog/" class="text-grey-600">
              Blog
            </NuxtLink>
          </li>
        </ul>
      </nav>
    </header>
    <div class="container mx-auto">
      <nuxt />
    </div>
  </div>
</template>

<script>
import Logo from '@/components/Logo.vue'

export default {
  components: {
    Logo
  }
}
</script>
