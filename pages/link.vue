<script setup>
definePageMeta({
  layout: 'none'
})
useHead({
  title: 'Ahmad Sarian',
})

const links = [
  {
    title: "JavaScript for Beginners",
    icon: "iconoir:book",
    url: "https://jagojs.my.id/",
  },
  {
    title: "Follow me on Threads",
    icon: "iconoir:threads",
    url: "https://threads.net/@sakirsyarian",
  },
  {
    title: "My Personal Website",
    icon: "iconoir:globe",
    url: "/",
  },
  {
    title: "Subscribe to my YouTube",
    icon: "iconoir:youtube",
    url: "https://youtube.com/@oterdev",
  },
  {
    title: "Buy me a Coffee",
    icon: "iconoir:coffee-cup",
    url: "https://saweria.co/oterdev",
  },
];
const socials = [
  {
    name: "telegram",
    icon: "iconoir:telegram",
    url: "https://t.me/sakirsyarian",
  },
  {
    name: "instagram",
    icon: "iconoir:instagram",
    url: "https://instagram.com/sakirsyarian",
  },
  {
    name: "github",
    icon: "iconoir:github",
    url: "https://github.com/oterdev",
  },
  {
    name: "email",
    icon: "iconoir:mail",
    url: "mailto:sariandeveloper@gmail.com",
  },
  {
    name: "tiktok",
    icon: "iconoir:tiktok",
    url: "https://tiktok.com/@oterdev",
  },
];
</script>

<template>
  <section class="text-gray-500 dark:text-gray-300">
    <div class="container mx-auto max-w-md px-4">
      <div class="min-h-screen flex flex-col">

        <header class="py-4 text-center">
          <div class="mb-4 flex justify-center">
            <img src="/profile.png" alt="Profile" class="rounded-full object-cover w-28 h-28"/>
          </div>
          <h1 class="mb-2 text-2xl font-bold">Ahmad Sarian</h1>
          <p class="mb-4">
            Hi there! I like sharing simple tips and tricks with JavaScript to
            make your coding life easier.
          </p>
          <div class="flex items-center justify-center gap-4">
            <div v-for="social in socials" :key="social.name">
              <NuxtLink :to="social.url" target="_blank">
                <Icon :name="social.icon" size="24"/>
              </NuxtLink>
            </div>
          </div>
        </header>

        <main class="py-4 flex-grow">
          <div class="flex flex-col gap-4">
            <div v-for="link in links" :key="link.title">
              <NuxtLink :to="link.url" target="_blank"
                        class="block rounded-lg border p-4 transition-colors duration-200 hover:shadow-lg">
                <div class="flex items-center gap-3">
                  <Icon :name="link.icon" size="26"/>
                  <span class="font-medium">{{ link.title }}</span>
                </div>
              </NuxtLink>
            </div>
          </div>
        </main>

        <footer class="py-4 text-center">
          <p class="dark:text-gray-300">
            © {{ new Date().getFullYear() }}
            <NuxtLink to="https://www.threads.net/@sakirsyarian" target="_blank">
              sakirsyarian.
            </NuxtLink>
          </p>
        </footer>

      </div>
    </div>
  </section>
</template>