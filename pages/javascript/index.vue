<script setup lang="ts">
useHead({
  title: 'Ahmad Sarian',
})
</script>

<template>
  <section class="py-10">
    <div class="container mx-auto max-w-screen-md px-4">
      <h1 class="mb-6 text-xl font-semibold">Tutorial javascript</h1>
      <div class="grid grid-cols-1 gap-6">

        <ContentList path="/javascript" v-slot="{ list }">
          <article v-for="post in list" :key="post._path" class="rounded-lg border transition-shadow hover:shadow-lg">
            <NuxtLink :to="post._path">
              <div class="p-4">
                <h2>{{ post.title }}</h2>
              </div>
            </NuxtLink>
          </article>
        </ContentList>

      </div>
    </div>
  </section>
</template>