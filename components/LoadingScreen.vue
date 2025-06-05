<template>
  <div v-if="show" class="fixed inset-0 flex items-center justify-center z-50">
    <div class="text-center">
      <img src="/assets/images/logo.png" alt="Sacra Cinema" class="w-32 h-32 mx-auto mb-4 animate-pulse">
      <div class="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-[#C6972D] mx-auto mb-4"></div>
      <p class="text-xl text-white">Memuat...</p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  show: {
    type: Boolean,
    default: true
  }
})
</script> 