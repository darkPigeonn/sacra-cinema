<script setup lang="ts">
const items = [
  'assets/image/23.png',
  'assets/image/24.png',
  'assets/image/25.png',
  'assets/image/26.png',
  'assets/image/27.png',
  'assets/image/28.png',
  'assets/image/29.png',
  'assets/image/30.png',
  'assets/image/31.png',
  'assets/image/32.png',
  'assets/image/33.png',
  'assets/image/34.png',
  'assets/image/35.png',
  'assets/image/366.png',
  'assets/image/37.png',
  'assets/image/38.png',
  'assets/image/39.png',
  'assets/image/40.png',
  'assets/image/41.png',
  'assets/image/42.png',
  'assets/image/43.png',
 
]
</script>

<template>
  <div class="nominasi">
    <header class="section-header">
      <p style="color:#C6972D">Karya Film Pendek Sacra Cinema</p>

    </header>
    <UCarousel v-slot="{ item }" :items="items" :ui="{ item: 'basis-full md:basis-1/2 lg:basis-1/3' }" indicators class="rounded-lg overflow-hidden">
      <img :src="item" class="w-full" draggable="false">
    </UCarousel>
  </div>
</template>

<style scoped>
  .nominasi {
    padding: 10px 0px;
    
  }
</style>