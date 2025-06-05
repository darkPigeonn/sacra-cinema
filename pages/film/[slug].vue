<script setup>
import { useRoute } from '#app'
import { computed, ref, onMounted } from 'vue'
import { useSeoMeta, useHead } from '#imports'
import { useRouter } from 'vue-router'

const isLoading = ref(true)

onMounted(() => {
  setTimeout(() => {
    isLoading.value = false
  }, 3000) // 3 detik
})

const router = useRouter()
const route = useRoute()

// Dapatkan parameter slug dari URL
const slug = route.params.slug;
const myData = (await import('@/assets/dataJson.json')).default;

// Temukan film berdasarkan slug
const film = computed(() => {
  return myData.find(item => {
    const itemSlug = item.title.toLowerCase()
      .replace(/ /g, '-')
      .replace(/[^\w-]+/g, '');
    return itemSlug === slug;
  });
});

// SEO Meta Tags
useSeoMeta({
  title: () => film.value ? `${film.value.title} - Film Pendek Sacra Cinema 2025` : 'Detail Film - Sacra Cinema 2025',
  description: () => film.value ? `${film.value.sinopsis?.substring(0, 160)}... - Film pendek karya ${film.value.nameParoki}` : '',
  ogTitle: () => film.value ? `${film.value.title} - Sacra Cinema 2025` : 'Detail Film',
  ogDescription: () => film.value ? film.value.sinopsis?.substring(0, 160) + '...' : '',
  ogImage: () => film.value ? film.value.images : '',
  twitterCard: 'summary_large_image',
  twitterTitle: () => film.value ? `${film.value.title} - Sacra Cinema 2025` : 'Detail Film',
  twitterDescription: () => film.value ? film.value.sinopsis?.substring(0, 160) + '...' : '',
  twitterImage: () => film.value ? film.value.images : '',
})

// Schema.org untuk Rich Results
useHead({
  script: [
    {
      type: 'application/ld+json',
      children: computed(() => {
        if (!film.value) return '{}'
        return JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Movie',
          name: film.value.title,
          description: film.value.sinopsis,
          image: film.value.images,
          genre: film.value.genre,
          producer: {
            '@type': 'Organization',
            name: film.value.nameParoki
          }
        })
      })
    }
  ]
})
</script>

<template>
  <LoadingScreen v-if="isLoading" />

  <div v-else-if="film" class="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white py-8">
    <!-- Breadcrumbs -->
    <div class="container mx-auto px-4 mb-6">
      <nav class="flex" aria-label="Breadcrumb">
        <ol class="inline-flex items-center space-x-1 md:space-x-3">
          <li class="inline-flex items-center">
            <NuxtLink to="/" class="inline-flex items-center text-sm font-medium text-gray-400 hover:text-[#C6972D] cursor-pointer">
              <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
              </svg>
              Beranda
            </NuxtLink>
          </li>
          <li aria-current="page">
            <div class="flex items-center">
              <svg class="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
              </svg>
              <span class="ml-1 text-sm font-medium text-gray-400 md:ml-2">{{ film.title }}</span>
            </div>
          </li>
        </ol>
      </nav>
    </div>

    <div class="container mx-auto px-4">
      <div class="bg-gray-800 rounded-xl shadow-2xl overflow-hidden">
        <div class="flex flex-col md:flex-row gap-8 p-6">
          <!-- Poster Film -->
          <div class="md:w-1/3">
            <div class="relative group rounded-lg overflow-hidden">
              <img 
                :src="film.images" 
                :alt="film.title" 
                class="w-full h-auto object-cover rounded-lg shadow-lg transition-transform duration-300 group-hover:scale-105"
              >
              <div class="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>
          
          <!-- Informasi Film -->
          <div class="md:w-2/3">
            <h1 class="text-4xl font-bold mb-4 text-[#C6972D] hover:text-[#E7B44D] transition-colors">{{ film.title }}</h1>
            <div class="mb-6 space-y-2">
              <h2 class="text-xl font-semibold text-gray-300">{{ film.nameParoki }}</h2>
              <div class="inline-block px-3 py-1 bg-[#C6972D] text-white text-sm rounded-full">
                {{ film.genre }}
              </div>
            </div>
            
            <div class="space-y-4">
              <h3 class="text-2xl font-semibold text-gray-300">Sinopsis</h3>
              <div class="prose prose-lg prose-invert">
                <p class="text-gray-400 leading-relaxed whitespace-pre-line">{{ film.sinopsis }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Tombol Kembali -->
      <div class="mt-8 text-center">
        <NuxtLink to="/">
          <button class="px-8 py-3 bg-[#C6972D] text-white rounded-full hover:bg-[#E7B44D] transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#C6972D] focus:ring-opacity-50 shadow-lg">
            <span class="flex items-center">
              <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Kembali ke Galeri
            </span>
          </button>
        </NuxtLink>
      </div>
    </div>
  </div>

  <!-- Loading State -->
  <div v-else class="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 flex items-center justify-center">
    <div class="text-center text-white">
      <div class="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-[#C6972D] mx-auto mb-4"></div>
      <p class="text-xl">Film tidak ditemukan...</p>
    </div>
  </div>
</template>

<style scoped>
.container {
  max-width: 1200px;
}

/* Optimasi untuk gambar */
img {
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  transform: translateZ(0);
  -webkit-transform: translateZ(0);
}

/* Animasi hover untuk poster */
.transform {
  will-change: transform;
}

/* Optimasi untuk text rendering */
.text-gray-400 {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/* Custom scrollbar */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: #1F2937;
}

::-webkit-scrollbar-thumb {
  background: #C6972D;
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: #E7B44D;
}
</style>