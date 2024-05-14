<template>
  <div class="tema" data-aos="zoom-in">
      <div class="title mx-5">
          <h3 class="mb-2">Didukung oleh : </h3>
          <div class="row mb-5">
            <div class="col">
              <h4>Talent dan Announcer Awarding</h4>
              <div class="d-flex justify-content-center align-items-center">
                <div v-for="(image, index) in items" :key="index">
                  <img :src="image" width="50" class="mx-2">
                </div>
              </div>
            </div>
           
          </div>
          <div class="row">
            <div class="col">
              <h4>Sponsorship & Donatur</h4>
              <div class="d-lg-none">
                <div class="row">
                  <div v-for="item in items2" class="col-4 d-flex align-items-center">
                      <img :src="item.url"  width="100" class="mx-2"/>
                  </div>
                </div>
              </div>
              <div class="d-none d-lg-block">
                <div class="d-flex justify-content-center align-items-center">
                  <div v-for="item in items2" class="mb-5">
                      <img :src="item.url"  width="80" class="mx-2"/>
                  </div>
                </div>
              </div>
            
            </div>
          </div>
      </div>

  </div >
</template>

<script setup lang="ts">
const items = [
  'assets/images/kolaborasisekolah/1.png',
  'assets/images/kolaborasisekolah/2.jpg',
  'assets/images/kolaborasisekolah/3.png',
  'assets/images/kolaborasisekolah/4.png',
  'assets/images/kolaborasisekolah/5.png',
  'assets/images/kolaborasisekolah/6.jpeg',
  'assets/images/kolaborasisekolah/7.png',
  'assets/images/kolaborasisekolah/8.jpeg',
  'assets/images/kolaborasisekolah/9.png',

]
const items2 = [
  {url : 'assets/images/sponsor/sp1.png',
    type : 'images'
  },
  {url : 'assets/images/sponsor/sp2.jpeg',
    type : 'images'
  },
  {url : 'assets/images/sponsor/sp3.png',
    type : 'images'
  },
  {url : 'assets/images/sponsor/sp5.png',
    type : 'images'
  },
  {url : 'assets/images/sponsor/sp6.png',
    type : 'images'
  },
  {
    url: 'assets/images/sponsor/sp7.png',
    type : 'images'
  },
  {
    url: 'assets/images/sponsor/sp8.jpeg',
    type : 'images'
  },
  {
    url: 'assets/images/sponsor/sp9.png',
    type : 'images'
  },
  {
    url: 'assets/images/sponsor/sp10.jpeg',
    type : 'images'
  },
  {
    url: 'assets/images/sponsor/sp11.png',
    type : 'images'
  },
  {
    url: 'assets/images/sponsor/sp12.png',
    type : 'images'
  },
  {
    url: 'assets/images/sponsor/sp13.png',
    type : 'images'
  },
  {
    url: 'assets/images/sponsor/sp14.png',
    type : 'images'
  },
  {
    url: 'assets/images/sponsor/sp15.jpeg',
    type : 'images'
  },
  
]
</script>
<style scoped>

.tema{
  font-family: sans-serif;
 
  color: #C6972D;
  width: 100%;
}


h1 {
  margin : 0.3em;
  font-size: 3em;
}
h2 {
  font-family: sans-serif;
  font-size: 2.5em;
  font-weight: bold;
}
.title {
  text-align: center;
}


.timeline {
  margin: 5em auto;
  max-width: 34.15em;
}
.checkpoint {
  max-width: 34em;
  padding-top: 2em;
  padding-bottom: 2em;
  position: relative;
}
.checkpoint div {
  border: 2px solid #C6972D;
  border-radius: 1em;
  padding: 1.5em;
}
.checkpoint p {
  line-height: 27px;
  color :#C6972D
}
.checkpoint:nth-child(odd) {
  border-left: 3px solid #C6972D;
  padding-left: 3em;
  transform: translate(17em);
}
.checkpoint:nth-child(even) {
  border-right: 3px solid #C6972D;
  padding-right: 3em;
  transform: translate(-16.8em);
}

.checkpoint:nth-child(odd)::before, .checkpoint:nth-child(even)::before {
  content: '';
  background: #C6972D;
  width: 3em;
  height: 3px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}
.checkpoint:nth-child(odd)::before{
  left: 0;
}
.checkpoint:nth-child(even)::before{
  right: 0;
}

.checkpoint:nth-child(odd) div::before, .checkpoint:nth-child(even) div::before {
  content: '';
  background: #C6972D;
  box-shadow: 0 0 0.5em #C6972D;
  width: 0.8em;
  height: 0.8em;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  border-radius: 50%;

}
.checkpoint:nth-child(odd) div::before {
 left: -0.5em;
}
.checkpoint:nth-child(even) div::before {
 right: -0.5em;
}
p{
  color : #C6972D;
}
@media screen and (max-width:1150px){
  h2{
      font-size: 2em;
  }
  .timeline {
      width: 80vw;
  }
  .timeline .checkpoint {
      width: 100%;
      transform: none;
      padding-left:0;
      padding-right: 0;
      border: none;
  }
  .timeline .checkpoint::before {
      width: 3px;
      height: 4em;
      top: -2em;
      left: 50%;
      transform: translateX(-50%)
  }
  .timeline .checkpoint div::before{
      top: -0.5em;
      left: 50%;
      transform: translateX(-50%);
  }
}
.max-20 {
  max-width: 20%;
}
/* Optional: To prevent the images from stretching vertically */

</style>