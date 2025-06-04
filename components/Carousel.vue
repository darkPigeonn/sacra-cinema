<script setup lang="ts">

import { useSeoMeta } from '#imports'

useSeoMeta({
  title: 'Karya Film Pendek Sacra Cinema 2025 - Koleksi Poster Film Pendek Terbaik',
  description: 'Lihat koleksi poster film pendek terbaik dari Sacra Cinema 2025. Gallery lengkap karya film pendek dengan gambar berkualitas tinggi.',
  keywords: ['film pendek', 'Sacra Cinema', 'poster film', 'film pendek 2025', 'koleksi poster film', 'gallery film pendek'],
  author: 'Sacra Cinema',
  ogImage: 'https://yourdomain.com/assets/images/poster2025/poster_01.jpg',
  canonical: 'https://sacracinema.keuskupansurabaya.org/karya-film-pendek-sacra-cinema-2025',
})


// const itemsOld = [
//   'assets/images/poster/20.jpg',
//   'assets/images/poster/21.jpg',
//   'assets/images/poster/22.jpg',
//   'assets/images/poster/23.jpg',
//   'assets/images/poster/24.jpg',
//   'assets/images/poster/25.jpg',
//   'assets/images/poster/26.jpg',
//   'assets/images/poster/27.jpg',
//   'assets/images/poster/28.jpg',
//   'assets/images/poster/29.jpg',
//   'assets/images/poster/30.jpg',
//   'assets/images/poster/31.jpg',
//   'assets/images/poster/32.jpg',
//   'assets/images/poster/33.jpg',
//   'assets/images/poster/34.jpg',
//   'assets/images/poster/35.jpg',
//   'assets/images/poster/36.jpg',
//   'assets/images/poster/37.jpg',
//   'assets/images/poster/38.jpg',
//   'assets/images/poster/39.jpg',
//   'assets/images/poster/40.jpg'
 
// ]
const items = [
  'assets/images/poster2025/poster_01.jpg',
  'assets/images/poster2025/poster_02.png',
  'assets/images/poster2025/poster_03.jpeg',
  'assets/images/poster2025/poster_04.jpg',
  'assets/images/poster2025/poster_05.png',
  'assets/images/poster2025/poster_06.jpg',
  'assets/images/poster2025/poster_07.jpg',
  'assets/images/poster2025/poster_08.png',
  'assets/images/poster2025/poster_09.jpg',
  'assets/images/poster2025/poster_10.png',
  'assets/images/poster2025/poster_11.png',
  'assets/images/poster2025/poster_12.jpg',
  'assets/images/poster2025/poster_13.png',
  'assets/images/poster2025/poster_14.jpg',
  'assets/images/poster2025/poster_15.jpg',
  'assets/images/poster2025/poster_16.jpg',
  'assets/images/poster2025/poster_17.png',
  'assets/images/poster2025/poster_18.jpg',
  'assets/images/poster2025/poster_19.jpg',
  'assets/images/poster2025/poster_20.jpg',
  'assets/images/poster2025/poster_21.png',
  'assets/images/poster2025/poster_22.png',
  'assets/images/poster2025/poster_23.png',
  'assets/images/poster2025/poster_24.jpg',
  'assets/images/poster2025/poster_25.png',
  'assets/images/poster2025/poster_26.jpg',
  'assets/images/poster2025/poster_27.jpg',
  'assets/images/poster2025/poster_28.png',
  'assets/images/poster2025/poster_29.png',
  
  
]
</script>

<template>
  <div class="nominasi">
    <header class="section-header">
      <p style="color:#C6972D">Karya Film Pendek Sacra Cinema</p>
      

    </header>
    <UCarousel v-slot="{ item }" :items="items" :ui="{ item: 'basis-full md:basis-1/5 lg:basis-1/4' }" indicators class="rounded-lg overflow-hidden">
      <img :src="item" alt="Poster Film Pendek Sacra Cinema 2025" class="w-full" draggable="false">
    </UCarousel>
  </div>
</template>

<style scoped>
  .nominasi {
    padding: 10px 0px;
    
  }
  @media only screen and (min-width: 768px) {
    .responsive-img {
        width: 50%;
      
    }
  }
</style>