<script setup lang="ts">
useHead({
  title: 'Ahmad Sarian',
})

const formatDate = (date: Date | string) => {
  return new Date(date).toLocaleDateString("id-ID", {
    year: "numeric",
    month: "numeric",
    day: "numeric",
  })
}
</script>

<template>
  <section class="py-10">
    <div class="container mx-auto max-w-screen-md px-4">
      <h1 class="mb-6 text-xl font-semibold">Blog posts</h1>
      <div class="grid grid-cols-1 gap-6">
        <ContentList path="/blog" v-slot="{ list }">
          <article v-for="post in list" :key="post._path" class="rounded-lg border transition-shadow hover:shadow-lg">
            <NuxtLink :to="post._path">
              <div class="p-6">
                <h2 class="mb-2 text-lg font-medium">{{ post.title }}</h2>
                <div class="flex gap-1 items-center mb-4 text-sm text-gray-400">
                  <Icon name="iconoir:calendar" size="18"/>
                  {{ formatDate(post.date) }}
                </div>
                <!-- <div class="mb-4 flex items-center gap-4 text-gray-400"> -->
                <!-- <div class="flex gap-1 items-center text-sm"> -->
                <!-- <Icon name="iconoir:calendar" size="18"/> -->
                <!-- {{ formatDate(post.date) }} -->
                <!-- </div> -->
                <!-- <div class="flex gap-1 items-center text-sm"> -->
                <!-- <Icon name="iconoir:eye-empty" size="18"/> -->
                <!-- {{ post.views }} views -->
                <!-- </div> -->
                <!-- </div> -->
                <p>{{ post.description }}</p>
              </div>
            </NuxtLink>
          </article>
        </ContentList>
      </div>
    </div>
  </section>
</template>