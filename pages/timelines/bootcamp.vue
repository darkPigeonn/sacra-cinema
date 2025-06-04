<template>
    <div class="container mt-5">

        <div class="text-center mb-5">
            <h2 style="color:#C6972D">Rundown Bootcamp {{ label }}</h2>
            <h1 style="color:#C6972D">Sacra Sinema Festival Film</h1>
            <h2 style="color:#C6972D">Keuskupan Surabaya</h2>
        </div>
        <hr>
        <ul class="timeline">
            <li v-for="(item, index) in timelines" :key="index" class="timeline-event">
                <label class="timeline-event-icon"></label>
                <div class="timeline-event-copy">
                    <p class="timeline-event-thumbnail">{{item.time}}</p>
                    <h3>{{item.description}}</h3>
                    <p v-if="item.speaker">{{ item.speaker }}</p>
                    <hr>
                    <div class="d-flex">
                        <i class="fas fa-location-dot"></i>
                        <h4>{{item.place}}</h4>
                    </div>
                </div>
            </li>

        </ul>
    </div>
</template>

<script>
export default{
    data: () => ({
        timelinesData: [
          {
            label : 8,
            date : '8 Maret 2024',
            items : [
                {
                    'time' : '18.00 - 18.45',
                    'description' : 'Registrasi peserta dan Coffee Break',
                    'place' : 'Depan A301, UKWMS Kampus Dinoyo'
                },
                {
                    'time' : '18.45 - 19.00',
                    'description' : 'Opening MC , Doa, Pengenalan Moderator dan Narasumber ',
                    'place' : '"Ruangan A301, UKWMS Kampus Dinoyo, Online: Zoom'
                },
                {
                    'time' : '19.00 - 20.00',
                    'description' : 'Diseminasi SKKA',
                    'speaker' : 'Moderator : Ignatius Dedy, Speaker : RD. Robertus Theo',
                    'place' : '"Ruangan A301, UKWMS Kampus Dinoyo, Online: Zoom'
                },
                {
                    'time' : '20.00 - 21.00',
                    'description' : 'Pembahasan Teknis dan Technical Meeting Lomba',
                    'speaker' : 'Moderator : Ignatius Dedy, Speaker : Adrian Tedja, Lousia Titi, Merlin',

                    'place' : '"Ruangan A301, UKWMS Kampus Dinoyo, Online: Zoom'
                },
                {
                    'time' : '21.00',
                    'description' : 'Penutupan by MC',
                    'place' : '"Ruangan A301, UKWMS Kampus Dinoyo, Online: Zoom'
                },
            ]
          },
          {
            label : 10,
            date : '10 Maret 2024',
            items : [
                {
                    'time' : '08.00 - 09.00',
                    'description' : 'Open Registration',
                    'place' : 'Depan A301, UKWMS Kampus Dinoyo'
                },
                {
                    'time' : '09.00 - 09.30',
                    'description' : 'Pembukaan MC',
                    'place' : '"Ruangan A301, UKWMS Kampus Dinoyo, Online: Zoom'
                },
                {
                    'time' : '09.30 - 10.30',
                    'description' : 'Materi BootCamp 1: Penulisan Naskah',
                    'speaker' : 'Moderator : Ignatius Dedy, Narasumber : Jennifer Odelia',
                    'place' : '"Ruangan A301, UKWMS Kampus Dinoyo, Online: Zoom'
                },
                {
                    'time' : '10.30 - 11.30',
                    'description' : 'Materi BootCamp 2: Director',
                    'speaker' : 'Moderator : Ignatius Dedy, Narasumber : Valens Brama',

                    'place' : '"Ruangan A301, UKWMS Kampus Dinoyo, Online: Zoom'
                },
                {
                    'time' : '11.30 - 12.30',
                    'description' : 'BootCamp 3: Producer',
                    'speaker' : 'Moderator : Ignatius Dedy, Narasumber : Angelica Ohbert',

                    'place' : '"Ruangan A301, UKWMS Kampus Dinoyo, Online: Zoom'
                },
                {
                    'time' : '12.30 - 13.30',
                    'description' : 'Makan Siang + Coffe Break',
                    'place' : 'Depan Kapel'
                },
                {
                    'time' : '13.30 - 15.00',
                    'description' : 'Focus Group Discussion',
                    'place' : 'Ruang A302 : Penulis Naskah \n Ruang A303 : Director \n Ruang A304 : Producer'
                },
                {
                    'time' : '15.00 - 15.15',
                    'description' : 'Back to Main Hall  + Toilet Break',
                    'place' : 'Ruangan A301'
                },
                {
                    'time' : '15.15 - 16.00',
                    'description' : '"Penarikan Benang Merah \n Perkenalan Juri Lomba \n Doa Penutup"',
                    'speaker' : 'Juri : \n 1. Louisa Kristin Hartanto \n 2. Ennos Aditya Saputra \n 3. Merlina Maria Barbara Apul \n 4. Adrian Tedja Artika \n 5. Komisi Anak',
                    'place' : '"Ruangan A301, UKWMS Kampus Dinoyo, Online: Zoom'
                },
            ]
          },

        ],
        timelines : [],
        label : '',
    }),
    mounted(){
        const date = this.$route.query.date;
        const findItems = this.timelinesData.find(item=> item.label == date);
        this.timelines = findItems.items
        this.label = findItems.date
  },
  head: {
      title : 'Jadwal Bootcamp Sacra Cinema'
    }
}
</script>

<style scoped>
i {
    margin :2px 10px;
}
ul{
    list-style-type: none;
}
</style>

<style lang="scss" scoped>
@import "compass-mixins/lib/compass/css3";

/* Variables */
$color-1: #cba752;
$color-2: white;
$color-3: rgb(168, 50, 121);

/* Fonts */
body {
  font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-size: 1em;
  font-weight: 300;
  line-height: 1.5;
  letter-spacing: 0.05em;
}

/* Layout */
* {
  @include box-sizing(border-box);
}

/* Styling */
.timeline {
  margin: auto;
  position: relative;
  max-width: 50em;

  &:before {
    background-color: $color-1;
    content: '';
    margin-left: -1px;
    position: absolute;
    top: 0;
    left: 2em;
    width: 2px;
    height: 100%;
  }
}

.timeline-event {
  position: relative;

  &:hover {

    .timeline-event-icon {
      @include rotate (-45deg);
      background-color: $color-3;
    }

    .timeline-event-thumbnail {
      @include box-shadow(inset 40em 0 0 0 $color-3);
    }
  }
}

.timeline-event-copy {
  padding: 2em;
  position: relative;
  top: -1.875em;
  left: 4em;
  width: 80%;

  h3 {
    font-size: 1.75em;
  }

  h4 {
    font-size: 1.2em;
    margin-bottom: 1.2em;
  }

  strong {
    font-weight: 700;
  }

  p:not(.timeline-event-thumbnail) {
    padding-bottom: 1.2em;
  }
}

.timeline-event-icon {
  @include transition(transform 0.2s ease-in);
  @include rotate (45deg);

  background-color: $color-1;
  outline: 10px solid $color-2;
  display: block;
  margin: 0.5em 0.5em 0.5em -0.5em;
  position: absolute;
  top: 0;
  left: 2em;
  width: 1em;
  height: 1em;
}

.timeline-event-thumbnail {
  @include transition(box-shadow 0.5s ease-in 0.1s);
  color: $color-2;
  font-size: 0.75em;

  background-color: $color-1;
  @include box-shadow(inset 0 0 0 0em #ef795a);
  display: inline-block;
  margin-bottom: 1.2em;
  padding: 0.25em 1em 0.2em 1em;
}
</style>