<script setup>
import { ref } from 'vue';
import emailjs from '@emailjs/browser';

useHead({
    title: 'Ahmad Sarian',
})

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
        toast.add({ title: 'Thank you sudah gabung!' })
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
            <div class="pb-8">
                <h1 class="text-xl font-semibold pb-2">
                    Gabung Yuk di Komunitas Teknologi Kita! 🚀
                </h1>
                <p>
                    Dapatkan update terbaru, tips kekinian dan artikel seru langsung di inbox kamu
                </p>
            </div>
            <form ref="myForm" class="space-y-4" @submit.prevent="onSubmit">
                <input type="text" name="name" value="no name" hidden>
                <UInput size="xl" color="blue" variant="outline" name="email" placeholder="Masukkan email" />
                <UButton :loading="isLoading" type="submit" block size="xl" color="blue" variant="solid">
                    <span class="font-semibold">Subscribe</span>
                </UButton>

                <div class="pt-2 text-sm text-gray-500">
                    <p>Kami menghargai privasi Anda. Unsubscribe kapan saja.</p>
                </div>
            </form>
            <div class="pt-8">
                <p class="pb-2">
                    Di era digital yang serba cepat, tetap up-to-date itu penting banget! Dengan subscribe newsletter
                    kami, kamu bakal dapetin:
                </p>
                <ul class="space-y-2 pl-5 list-disc">
                    <li>
                        Artikel seru: update tentang inovasi teknologi terbaru, tren yang lagi hits, dan analisis yang
                        bikin kamu makin paham dunia tech.
                    </li>
                    <li>
                        Tips & trik: panduan praktis dan hacks keren buat nambah skill kamu, baik buat yang baru mulai
                        atau yang udah pro.
                    </li>
                    <li>
                        Info produk terbaru: semua info tentang produk dan layanan kami, termasuk fitur baru, update,
                        dan penawaran spesial.
                    </li>
                    <li>
                        Undangan event: kesempatan buat ikut webinar, workshop, dan event komunitas seru yang kita
                        adain.
                    </li>
                </ul>
                <p class="pt-2">
                    Kita berkomitmen buat kasih konten yang asik dan berguna buat ngedukung perkembangan karir dan
                    pengetahuan kamu di dunia teknologi.
                </p>
            </div>
        </div>
    </section>
</template>