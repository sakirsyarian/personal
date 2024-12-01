<template>
  <header class="py-4 border-b border-gray-100 dark:border-gray-800">
    <nav class="container mx-auto max-w-screen-md px-4">
      <div class="flex items-center justify-between text-gray-500">
        <div class="flex items-center gap-6">
          <NuxtLink to="/" class="text-lg font-medium hover:text-gray-700 dark:text-gray-300 dark:hover:text-gray-100">
            sakirsyarian
          </NuxtLink>
          <div class="md:flex items-center gap-4 hidden">
            <NuxtLink to="/blog" class="hover:text-gray-700 dark:hover:text-gray-300">blog</NuxtLink>
            <NuxtLink to="/javascript" class="hover:text-gray-700 dark:hover:text-gray-300">
              javascript
            </NuxtLink>
          </div>
        </div>
        <UButton color="blue" variant="soft" to="/subscribe">subscribe</UButton>
      </div>
    </nav>
  </header>
</template>