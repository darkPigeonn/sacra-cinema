<template>
   <div class="container px-5 pb-5">
                    <div class="row gx-5 align-items-center">
                        <div class="col-xxl-5">
                            <!-- Header text content-->
                            <div class="text-center text-xxl-start">
                                <div class="fs-3 fw-light text-muted">Keuskupan Surabaya</div>
                                <h1 class="display-3 fw-bolder">
                                    <span class="">Sacra Cinema</span>
                                </h1>
                                    <p class="">Mendorong semangat merasul di media sosial dan membangun jejaring dengan insan pastoral komunikasi sosial paroki.</p>

                            </div>
                        </div>
                        <div class="col-xxl-7">
                            <!-- Header profile picture-->
                            <div class="d-flex justify-content-center">
                                <div class="profile bg-gradient-primary-to-secondary">
                                    <!-- TIP: For best results, use a photo with a transparent background like the demo example below-->
                                    <!-- Watch a tutorial on how to do this on YouTube (link)-->
                                    <video autoplay loop  playsinline class="hero-video" ref="video">
                                        <source :src="videoSource" type="video/mp4">
                                        Your browser does not support the video tag.
                                    </video>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
</template>


<script>
export default {
  data() {
    return {
      videoSource: '/assets/videos/img.mp4'
    }
  },

}
</script>

<style scoped>
.hero-video {
    width: 100%;
    border-radius: 50px;


}
.profile {
    border-radius: 50px;
    padding: 10px;
    background-color:#C5962A ;
}
@media only screen and (min-width: 768px) {
    .profile {
        width: 50%;
        margin-top: 20px;
    }
  }
</style>