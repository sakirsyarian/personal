<script setup>
import { ref } from 'vue';
import emailjs from '@emailjs/browser';

const isOpen = ref(false)

const isLoading = ref(false);
const myForm = ref(null);
async function onSubmit() {
  try {
    isLoading.value = true;
    if (!myForm.value.email.value) return false;
    const email =  await emailjs.sendForm('service_ywq3648', 'template_uywjia6', myForm.value, {
      publicKey: 'Iz_ZTYcxSEZtuyjaR',
    })
    console.log(email.text);

    isOpen.value = false
    const toast = useToast()
    toast.add({ title: 'Successful subscription' })
  } catch (e) {
    console.error(e);
  } finally {
    isLoading.value = false;
    myForm.value.reset()
  }
}
</script>

<template>
  <header class="py-4">
    <nav class="container mx-auto max-w-screen-md px-4">
      <div class="flex items-center justify-between text-gray-500">
        <div class="flex items-center gap-2">
         <div class="mr-4">
           <NuxtLink to="/" class="text-lg font-medium hover:text-gray-700 dark:text-gray-300 dark:hover:text-gray-100">
             sakirsyarian
           </NuxtLink>
         </div>
          <NuxtLink to="/blog" class="text-link">blog</NuxtLink>
          <NuxtLink to="/link" class="text-link">link</NuxtLink>
          <NuxtLink to="/javascript" class="text-link">javascript</NuxtLink>
        </div>
        <div class="button">
          <UButton color="blue" variant="soft" @click="isOpen = true">subscribe</UButton>

          <UModal v-model="isOpen">
            <UCard :ui="{ ring: '', divide: 'divide-y divide-gray-100 dark:divide-gray-800' }">
              <template #header>
               <h3 class="text-gray-500 text-lg font-medium">Newsletter</h3>
              </template>

              <form ref="myForm" class="space-y-4" @submit.prevent="onSubmit">
                <UInput block size="xl" color="blue" variant="outline" name="email" placeholder="Masukkan email"/>
                <UButton :loading="isLoading" type="submit" block size="xl" color="blue" variant="solid">
                  <span class="font-semibold">Subscribe</span>
                </UButton>
              </form>
            </UCard>
          </UModal>
        </div>
      </div>
    </nav>
  </header>
</template>
<script setup lang="ts">
</script>