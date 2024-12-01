<template>
  <footer class="py-4 border-t border-gray-100 dark:border-gray-800">
    <div class="container mx-auto max-w-screen-md px-4">
      <div class="flex items-center justify-between gap-4 text-gray-500">
        <div class="dark:text-gray-300">
          © {{ new Date().getFullYear() }}
          <NuxtLink to="https://www.threads.net/@sakirsyarian" target="_blank">
            sakirsyarian.
          </NuxtLink>
        </div>
        <div class="flex justify-center gap-2">
          <ThemeToggle />
        </div>
      </div>
    </div>
  </footer>
</template>