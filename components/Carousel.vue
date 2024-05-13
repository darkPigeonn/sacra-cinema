<script setup lang="ts">
const items = [
  'assets/images/poster/20.jpg',
  'assets/images/poster/21.jpg',
  'assets/images/poster/22.jpg',
  'assets/images/poster/23.jpg',
  'assets/images/poster/24.jpg',
  'assets/images/poster/25.jpg',
  'assets/images/poster/26.jpg',
  'assets/images/poster/27.jpg',
  'assets/images/poster/28.jpg',
  'assets/images/poster/29.jpg',
  'assets/images/poster/30.jpg',
  'assets/images/poster/31.jpg',
  'assets/images/poster/32.jpg',
  'assets/images/poster/33.jpg',
  'assets/images/poster/34.jpg',
  'assets/images/poster/35.jpg',
  'assets/images/poster/36.jpg',
  'assets/images/poster/37.jpg',
  'assets/images/poster/38.jpg',
  'assets/images/poster/39.jpg',
  'assets/images/poster/40.jpg'
 
]
</script>

<template>
  <div class="nominasi">
    <header class="section-header">
      <p style="color:#C6972D">Karya Film Pendek Sacra Cinema</p>

    </header>
    <UCarousel v-slot="{ item }" :items="items" :ui="{ item: 'basis-full md:basis-1/5 lg:basis-1/6' }" indicators class="rounded-lg overflow-hidden">
      <img :src="item" class="w-full" draggable="false">
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