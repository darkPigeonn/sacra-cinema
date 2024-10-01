<template>
  <v-container class="mt-16">
    <div class="container">
          <div class="elfsight-app-212dfbba-9d43-4172-aa4c-9baeccda5056" data-elfsight-app-lazy></div>
        </div>
  </v-container>
</template>

<script>
import { ref, onMounted } from 'vue';

export default {
  setup() {
    const pengumumanApi = ref(null);
    const isDataLoaded = ref(false);
    const endpoint = '/api/pages'; // Replace with your actual endpoint

    const fetchPengumuman = async () => {
      try {
        const { data } = await useFetch(endpoint);
        pengumumanApi.value = data.value; // Access the reactive value of data
        console.log("pengumumanApi.value", pengumumanApi.value);
        isDataLoaded.value = true;
      } catch (error) {
        console.error("Error fetching pengumuman:", error);
      }
    };

    onMounted(() => {
      fetchPengumuman();
    });

    return {
      pengumumanApi,
      isDataLoaded,
    };
  },
};
</script>