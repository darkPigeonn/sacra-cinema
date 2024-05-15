<script setup>
import { useNuxtApp } from 'nuxt/app'
// const { $contentfulClient } = useNuxtApp();
// const data = await $contentfulClient.getEntries({ content_type: 'awarding2024' }).then(function (entries) {
//   return entries.items
// })


</script>

<template>
  <div class="container">
    <div class="gallery">
        <img v-for="(image, index) in data" :key="index" :src="image.fields.image.fields.file.url" alt="a forest after an apocalypse">
       
    </div>
  </div>
</template>

<style scoped>
.gallery {

  --g: 10px;  /* control the gap */
  display: grid;
  gap: var(--g);
  width: calc(3*var(--s) + 2*var(--g));
  aspect-ratio: 2;
  grid-template-columns: repeat(3,auto);
}

.gallery > img {
  width: 0;
  height: 0;
  min-height: 100%;
  min-width: 100%;
  object-fit: cover;
  cursor: pointer;
  filter: grayscale(80%);
  transition: .35s linear;
}



</style>