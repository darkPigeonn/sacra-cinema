<template>
   <div class="container px-5 pb-5">
                    <div class="row gx-5 align-items-center ">
                        <div class="col-xxl-7">
                            <!-- Header profile picture-->
                            <div class="d-flex justify-content-center">
                                <div class="profile bg-gradient-primary-to-secondary " @click="playVideo">
                                    <!-- TIP: For best results, use a photo with a transparent background like the demo example below-->
                                    <!-- Watch a tutorial on how to do this on YouTube (link)-->
                                    <video autoplay loop nclick="this.play();arguments[0].preventDefault();" class="hero-video" ref="videoPlayer">
                                        <source :src="videoSource" type="video/mp4">
                                        Your browser does not support the video tag.
                                    </video>
                                
                                </div>
                            </div>
                        </div>
                        <div class="col-xxl-5">
                            <!-- Header text content-->
                            <div class="text-center text-xxl-start">
                                <div class="fs-3 fw-light text-muted">RD. Robertus Theo Elno R.</div>
                                <h1 class="display-3 fw-bolder">
                                    <span class="">Sacra Cinema</span>
                                </h1>
                                    <p class="">"Dengan demikian, baik film dan proses pembuatan filmnya pun dapat menggambarkan penghayatan akan tema tahunan <b> Keuskupan Surabaya
                                    </b> yaitu <b>
                                        Gereja Satu Kudus Katolik dan Apostolik.
                                    </b> "</p>

                            </div>
                        </div>
                       
                    </div>
                </div>
</template>


<script>
export default {
  data() {
        return {
            isMuted :true,
      videoSource: '/assets/videos/img.mp4'
    }
    },
    methods: {
    playVideo() {
      const video = this.$refs.videoPlayer;
      video.play();
    }
  }
 

}
</script>

<style scoped>
.hero-video {
    width: 100%;
    border-radius: 50px;


}
@media only screen and (min-width: 768px) {
    .profile {
        width: 50%;
        margin-top: 20px;
    }
  }
</style>