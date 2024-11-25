<template>
  <section class="py-10">
    <div class="container mx-auto max-w-screen-md px-4">
      <h1 class="mb-6 text-xl font-semibold">Project posts</h1>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <ContentList path="/portfolio/project" v-slot="{ list }">
          <article v-for="project in list" :key="project._path"
                   class="rounded-lg border transition-shadow hover:shadow-lg">
            <img :src="project.img" alt="image project">
            <NuxtLink :to="project._path">
              <div class="p-4">
                <h2 class="mb-2 text-lg font-medium">{{ project.title }}</h2>
              </div>
            </NuxtLink>
          </article>
        </ContentList>
      </div>
    </div>
  </section>
</template>
