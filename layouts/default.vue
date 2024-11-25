<template>
  <section class="text-gray-500 dark:text-gray-300">
    <div class="min-h-screen flex flex-col">
      <Header/>
      <main class="flex-grow">
        <slot/>
      </main>
      <Footer/>
    </div>
  </section>
</template>