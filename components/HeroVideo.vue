<template>
   <div class="container px-5 pb-5">
        <div class="row gx-5 align-items-center ">
            <div class="col-xxl-7">
                <div class="container2">
                    <div class="wrapper">
                        <div class="content2">
                            <iframe width="100%" height="100%" :src="'https://www.youtube.com/embed/J8YHCGOjWN8?autoplay=1'" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share;repeat" allowfullscreen></iframe>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-xxl-5" data-aos="fade-left">
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
      videoSource: 'J8YHCGOjWN8'
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
iframe {
    width: 100%;
    height: 20vh;
}
@media only screen and (min-width: 768px) {
    .profile {
        width: 50%;
        margin-top: 20px;
    }
  }
  .container2{

height:100%;
}
.wrapper {
  margin: 0 10px; /* Tambahkan margin kiri dan kanan sesuai kebutuhan Anda */
}
.content2 {
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: 56.25%; /* Rasio 16:9 (9 / 16 * 100) */
}
.content2 iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>