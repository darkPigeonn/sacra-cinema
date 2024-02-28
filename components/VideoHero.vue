<template>
    <div class="iframe-container">
      <iframe :src="videoUrl" frameborder="0" allowfullscreen></iframe>
    </div>
  </template>

  <script>
  export default {
    data() {
      return {
        videoUrl: "/assets/videos/img.mp4"
      };
    }
  };
  </script>

  <style scoped>
  .iframe-container {
    position: relative;
    width: 100%;
    height: 0;
    padding-bottom: 56.25%;
  }

  .iframe-container iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  </style>
