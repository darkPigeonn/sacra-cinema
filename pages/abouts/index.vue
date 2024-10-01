<template>
    <div class="container">
        <div v-for="(item, index) in 12" :key="index" class="image-container">            
            <img class="responsive-img" :src="`/assets/images/tor/${index + 2}.png`" />
        </div>
    </div>
</template>



<style scoped>
/* Default for mobile view */
.responsive-img {
  width: 100%;       /* 100% width for mobile */
  display: block;    /* Ensures the image behaves like a block element */
  margin: 0 auto;    /* Centers the image horizontally */
}

/* For desktop view (min-width: 992px corresponds to large devices in Bootstrap) */
@media (min-width: 992px) {
  .responsive-img {
    width: 50%;      /* 50% width for large screens */
    margin: 0 auto;  /* Centers the image horizontally */
  }
}
</style>