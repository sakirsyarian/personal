<script setup>
import { ref } from 'vue';
import emailjs from '@emailjs/browser';

useHead({
  title: 'Ahmad Sarian',
})

const socials = [
  {
    name: "threads",
    href: "https://www.threads.net/@sakirsyarian",
  },
  {
    name: "instagram",
    href: "https://www.instagram.com/sakirsyarian/",
  },
];

const isLoading = ref(false);
const myForm = ref(null);
async function onSubmit() {
  try {
    isLoading.value = true;
    if (!myForm.value.email.value) return false;
    const email = await emailjs.sendForm('service_ywq3648', 'template_uywjia6', myForm.value, {
      publicKey: 'Iz_ZTYcxSEZtuyjaR',
    })
    console.log(email.text);
    const toast = useToast()
    toast.add({ title: 'Makasih udah subscribe!' })
  } catch (e) {
    console.error(e);
  } finally {
    isLoading.value = false;
    myForm.value.reset()
  }
}
</script>

<template>
  <section class="py-10">
    <div class="container mx-auto max-w-screen-md px-4">
      <h1 class="mb-6 text-2xl font-bold">
        Code Better. Learn Faster. Stay Updated.
      </h1>
      <div class="space-y-4 mb-6">
        <p>
          Yuk, gabung bareng <b>200+ developer</b> yang tiap minggu dapetin insight keren soal JavaScript, framework
          terbaru, plus tips pengembangan yang super praktis!
        </p>
        <p>
          Mulai perjalananmu jadi developer yang lebih jago dengan <b>tutorial seru, tren teknologi terbaru, </b>
          dan <b> wawasan eksklusif</b> yang cuma ada buat subscriber.
        </p>
      </div>
      <form ref="myForm" class="flex gap-2" @submit.prevent="onSubmit">
        <input type="text" name="name" value="no name" hidden>
        <UInput class="lg:w-64" size="lg" color="blue" variant="outline" name="email" placeholder="Masukkan email" />
        <UButton :loading="isLoading" type="submit" size="lg" color="blue" variant="solid">
          Subscribe Gratis
        </UButton>
      </form>
    </div>
  </section>

  <!-- feature post -->
  <section class="py-10">
    <div class="container mx-auto max-w-screen-md px-4">
      <h2 class="mb-6 text-xl font-semibold">Featured</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">

        <ContentList path="/blog" v-slot="{ list }">
          <article v-for="post in list" :key="post._path" class="rounded-lg border transition-shadow hover:shadow-lg">
            <img :src="post.img" alt="image post">
            <NuxtLink :to="post._path">
              <div class="p-6">
                <h3 class="mb-4 text-lg font-semibold">{{ post.title }}</h3>
                <p>{{ post.description }}</p>
              </div>
            </NuxtLink>
          </article>
        </ContentList>

      </div>
    </div>
  </section>

  <!-- tutorial -->
  <section class="py-10">
    <div class="container mx-auto max-w-screen-md px-4">
      <h2 class="mb-6 text-xl font-semibold">Tutorial</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">

        <article class="rounded-lg border transition-shadow hover:shadow-lg">
          <img src="/tutorial/js.png" alt="image post">
          <NuxtLink to="/javascript">
            <div class="p-6">
              <h3 class="mb-4 text-lg font-semibold">JavaScript</h3>
              <p>Pelajari dasar-dasar pemrograman Javascript untuk membuat website yang interaktif.</p>
            </div>
          </NuxtLink>
        </article>

      </div>
    </div>
  </section>

  <!-- latest post -->
  <section class="py-10">
    <div class="container mx-auto max-w-screen-md px-4">
      <div class="flex items-center justify-between">
        <h2 class="mb-6 text-xl font-semibold">Latest posts</h2>
        <NuxtLink to="/blog" class="text-link">
          See all posts
        </NuxtLink>
      </div>
      <div class="grid grid-cols-1 gap-6">

        <ContentList path="/blog" v-slot="{ list }">
          <article v-for="post in list" :key="post._path" class="rounded-lg border transition-shadow hover:shadow-lg">
            <NuxtLink :to="post._path">
              <div class="p-6">
                <h3 class="mb-4 text-lg font-semibold">{{ post.title }}</h3>
                <p>{{ post.description }}</p>
              </div>
            </NuxtLink>
          </article>
        </ContentList>

      </div>
    </div>
  </section>

  <!-- ebook -->
  <section class="py-10">
    <div class="container mx-auto max-w-screen-md px-4">
      <h2 class="mb-6 text-xl font-semibold">Ebook</h2>
      <div class="flex flex-wrap gap-6">

        <article class="flex p-4 items-center rounded-lg border transition-shadow hover:shadow-lg">
          <img src="/ebook/js.webp" alt="ebook javascript" class="hidden md:block md:w-28">
          <NuxtLink to="https://jagojs.my.id">
            <div class="px-3 space-y-2">
              <h3 class="mb-4 text-lg font-semibold">Beginner JavaScript</h3>
              <p>By Ahmad Sarian</p>
              <p>Belajar dari nol sampai paham total, tanpa drama coding yang bikin pusing kepala. Cocok
                banget buat kamu yang mau jadi jago JavaScript!</p>
            </div>
          </NuxtLink>
        </article>

      </div>
    </div>
  </section>

  <!-- contact -->
  <section class="py-10">
    <div class="container mx-auto max-w-screen-md px-4">
      <h2 class="mb-6 text-xl font-semibold">Let&apos;s connect</h2>
      <p class="mb-6">
        Kalau mau ngobrol soal apa aja, nanya-nanya tentang dunia web development, atau cuma mau say hi, bisa
        hubungi saya lewat media sosial atau langsung kirim email ke saya!
      </p>
      <div class="space-y-4">
        <ul class="flex flex-wrap gap-2">
          <li v-for="social in socials" :key="social.name" class="flex items-center gap-2">
            <NuxtLink :to="social.href" class="text-link">
              {{ social.name }}
            </NuxtLink>
            /
          </li>
          <li class="line-clamp-1">
            <NuxtLink to="mailto:sariansakir@gmail.com" class="text-link">
              gmail
            </NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>