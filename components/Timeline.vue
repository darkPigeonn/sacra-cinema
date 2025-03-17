<template>
    <div data-aos="zoom-in">
        <div class="title">
            <h2>Agenda Sacra Cinema</h2>
        </div>
        <div class="page-menu-section text-center mt-3">
            <button :class="['btn', 'btn-primary-custom', { 'active': viewMode === 0}, 'mx-2', 'p-2']"   @click="setViewMode(0)">Sacra Cinema 2024</button>
            <button :class="['btn', 'btn-primary-custom', { 'active': viewMode === 1 }, 'mx-2', 'p-2']"  @click="setViewMode(1)">Sacra Cinema 2025</button>
        </div>
        <div class="timeline" v-if="viewMode == 0">
            <div class="checkpoint">
                <div>
                    <span>17 Februari 2024</span>
                    <h2>Publikasi</h2>
                </div>
            </div>
            <div class="checkpoint">
                <div>
                    <span>18 Februari 2024 - 3 Maret 2024</span>
                    <h2>Pendaftaran</h2>
                </div>
            </div>
            <div class="checkpoint">
                <div>
                    <span>8 Maret 2024</span>
                    <h2>Bootcamp</h2>
                    <p>
                        Pendalaman Tema & Sacra Cinema</p>

                    <NuxtLink href="/timelines/bootcamp?date=8" class="y-2 mb-5 " style="float: right;color:#e00303 ;">Lihat Lebih Lanjut...</NuxtLink>

                </div>
            </div>
            <div class="checkpoint">
                <div>
                    <span>10 Maret 2024</span>
                    <h2>Bootcamp</h2>
                    <p>Pendalaman Materi Dasar Pembuatan Film</p>
                    <NuxtLink href="/timelines/bootcamp?date=10" class="y-2 mb-5 " style="float: right;color:#e00303 ;">Lihat Lebih Lanjut...</NuxtLink>

                </div>
            </div>
            <div class="checkpoint">
                <div>
                    <span>10 Maret - 29 April 2024</span>
                    <h2>Coaching & Produksi Film</h2>
                    <p>
                        Produksi film dilakukan sesuai kebutuhan peserta.
                    </p>
                </div>
            </div>
            <div class="checkpoint">
                <div>
                    <span>29 April 2024</span>
                    <h2>Pengumpulan Karya</h2>

                </div>
            </div>
            <div class="checkpoint">
                <div>
                    <span>1 - 3 Mei 2024</span>
                    <h2>Penjurian</h2>
                </div>
            </div>
            <div class="checkpoint">
                
                <div>
                    <span>11 Mei 2024</span>
                    <h2>Awarding - Hari Komunikasi Sosial Sedunia</h2>
                    <NuxtLink href="https://www.youtube.com/watch?v=yiBjHwjzp4E" target="_blank" class="y-2 mb-5 " style="float: right;color:#e00303 ;">Lihat Lebih Lanjut...</NuxtLink>

                </div>
            </div>
        </div>
        <div class="timeline" v-if="viewMode == 1">
            <div v-for="(item, index) in list2025" :key="index" class="checkpoint">
                <div>
                    <span>{{item.date}}</span>
                    <h2>{{ item.event }}</h2>
                </div>
            </div>
          
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
var viewMode = ref(0);
const setViewMode = (param: number) => { 
    viewMode.value = param;
}

const list2025 = [
{
    'event' : "Diskusi Film dan Launching Sacra Cinema 2025",
    "date":"31 Agustus 2024"
    
},
{
    'event' : "Pendaftaran",
    "date":"1 Oktober - 3 November 2024"
    
},
{
    'event' : "Meet & Brief - Technical Meeting (online).",
    "date":"6 November 2024"
    
},
{
    'event' : "Produksi Film",
    "date":"November 2024-Maret 2025"
},
{
    'event' : "Pengumpulan Film",
    "date":"6 April 2025 - 11 Mei 2025"
    
},
{
    'event' : "Penjurian",
    "date":"Mei 2025"
    
},
{
    'event' : "Gala Premiere (Hari Komsos Sedunia Ke-59)",
    "date":"1 Juni 2025"
    
},
{
    'event' : "Awarding Film Sacra Cinema",
    "date":"7 Juni 2025"
    
},
{
    'event' : "Diskusi Film dan Launching Sacra Cinema 2026",
    "date":"Agustus 2025"
    
},
]
</script>

<style scoped>
body{
    margin : 0;
    font-family: sans-serif;
    /* background : #F9EEC3; */
    position: absolute;
    padding: 2em;
    color: #C6972D;
    width: 100%;
}
/* body::before {
    content : '';
    background : rgba(0, 0, 0, .7);
    position: absolute;
    top:0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    position: fixed;
} */
* {
    margin:0;
    padding: 0;
}

h1 {
    margin : 0.3em;
    font-size: 3em;
}
h2 {
    font-size: 2em;
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

.btn-primary-custom{
    border:1px solid #C6972D;
    color: grey;
}
.active{
    background-color: #C6972D !important;
    color: black;
}
</style>