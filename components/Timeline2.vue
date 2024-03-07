<template>
    <div class="tema" data-aos="zoom-in">
        <div class="title">
            <h3>Tema Festival Film Keuskupan Surabaya 2024</h3>
            <h2>"Gereja yang Satu, Kudus, Katolik, dan Apostolik."</h2>
        </div>

    </div >
</template>


<style scoped>
.tema{
    margin : 0;
    font-family: sans-serif;
    background : #F9EEC3;

    padding: 5em;
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
</style>