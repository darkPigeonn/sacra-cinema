<template>
    <div>
        <Hero />
        <HeroVideo />

        <!-- Latar Belakang -->
        <div class="section-excerpt">
          <div class="d-flex align-content-center">
            <h2>Latar Belakang</h2>
            <p>Kesadaran Gereja akan pentingnya merasul lewat media sosial dapat ditemukan dalam Dekrit Inter Mirifica Konsili Vatikan II. Kesadaran itu terungkap dalam artikel 2: “Bunda Gereja menyadari, bahwa upaya-upaya itu, kalau digunakan dengan tepat, dapat berjasa besar bagi umat manusia, sebab sangat membantu untuk menyegarkan hati dan mengembangkan budi, dan untuk menyiarkan serta memantapkan Kerajaan Allah. Kepentingan Gereja terhadap dunia media sosial adalah mewartakan Injil.”</p>
          </div>
            <div class="col-12 col-sm-6 section-introduction">
            </div>
           
        </div>

        <!-- Tema -->
        <div class="section-theme">
            <h1>Tema</h1>
            <p>Tema Festival Film tahun 2024 sesuai dengan fokus pastoral Keuskupan Surabaya ialah Gereja yang Satu Kudus Katolik Apostolik.</p>
        </div>

        <div class="section-teams">
			<Teams />
        </div>
    </div>
</template>

<style lang="scss" scoped>
.section-theme {
    padding: 2%;
    align-content: center;
    align-items: center;
}
.section-excerpt{
    background-color: #F0EBDE;
    padding: 3%;
}
.flex-item {
    flex: 1;
}
.section-introduction {
    padding: 20px 20px;
}
.section-introduction p {
    color: white;
    padding: 10px 10px;
}
.section-linimasa{
    padding: 20px;
}
/* Styling the iframe container */

/* Styling the iframe itself */
.iframe-container {
  position: relative;

  height: 0;
  padding-bottom: 75%; /* Rasio aspek 16:9 */
}

.iframe-container iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}


p,a,h1,h2,h3,h4 {
	margin: 0;
	padding: 0;
}

.section-team {
	font-family: "Poppins", sans-serif;
	padding: 80px 0;
}

.section-team .header-section {
	margin-bottom: 50px;
}

.section-team .header-section .small-title {
    margin-bottom: 25px;
	font-size: 16px;
    font-weight: 500;
    color: #3e64ff;
}

.section-team .header-section .title {
    font-weight: 700;
    font-size: 45px;
}

.section-team .single-person {
	margin-top: 30px;
	padding: 30px;
	background-color: #f6f9ff;
	border-radius: 5px;
}

.section-team .single-person:hover {
	background: linear-gradient(to right, #016cec, #00b5f7);
}

.section-team .single-person .person-image {
    position: relative;

    border: 4px dashed transparent;
    transition: padding .3s;
}

.section-team .single-person:hover .person-image {
	padding: 12px;
    border: 4px dashed #fff;
}

.section-team .single-person .person-image img {
	width: 100%;

}

.section-team .single-person .person-image .icon {
	position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%,50%);
    display: inline-block;
    width: 60px;
    height: 60px;
    line-height: 60px;
    text-align: center;
    background: linear-gradient(to right, #016cec, #00b5f7);
    color: #fff;
    border-radius: 50%;
    font-size: 24px;
}

.section-team .single-person:hover .person-image .icon {
	background: none;
	background-color: #fff;
	color: #016cec;
}

.section-team .single-person .person-info .full-name {
	margin-bottom: 10px;
	font-size: 28px;
    font-weight: 700;
}

.section-team .single-person .person-info .speciality {
    text-transform: uppercase;
    font-size: 14px;
    color: #016cec;
}

.section-team .single-person:hover .full-name,
.section-team .single-person:hover .speciality {
	color: #fff;
}

img {
    object-fit: cover;
}


* {
  font-family: Nunito, sans-serif;
}

.text-blk {
  margin-top: 0px;
  margin-right: 0px;
  margin-bottom: 0px;
  margin-left: 0px;
  padding-top: 10px;
  padding-right: 10px;
  padding-bottom: 10px;
  padding-left: 10px;
  line-height: 25px;
}

.responsive-cell-block {
  min-height: 75px;
}

.responsive-container-block {
  min-height: 75px;
  height: fit-content;
  width: 100%;
  padding-top: 10px;
  padding-right: 10px;
  padding-bottom: 10px;
  padding-left: 10px;
  display: flex;
  flex-wrap: wrap;
  margin-top: 0px;
  margin-right: auto;
  margin-bottom: 0px;
  margin-left: auto;
  justify-content: flex-start;
}

.outer-container {
  padding-top: 10px;
  padding-right: 30px;
  padding-bottom: 10px;
  padding-left: 30px;
}

.inner-container {
  max-width: 1320px;
  padding-top: 10px;
  padding-right: 10px;
  padding-bottom: 10px;
  padding-left: 10px;
  margin-top: 50px;
  margin-right: auto;
  margin-bottom: 50px;
  margin-left: auto;
}

.heading-text {
  font-size: 48px;
  line-height: 50px;
  font-weight: 900;
  display: flex;
  flex-direction: column;
  margin-top: 0px;
  margin-right: 0px;
  margin-bottom: 15px;
  margin-left: 0px;
  padding-top: 0px;
  padding-right: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
}

.sub-heading-text {
  line-height: 30px;
  color: rgb(122, 122, 122);
  margin-top: 0px;
  margin-right: 0px;
  margin-bottom: 0px;
  margin-left: 0px;
  padding-top: 0px;
  padding-right: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
}

.name {
  font-size: 18px;
  font-weight: 800;
  line-height: 24px;
  padding-top: 15px;
  padding-right: 10px;
  padding-bottom: 5px;
  padding-left: 0px;
  margin-top: 0px;
  margin-right: 0px;
  margin-bottom: 0px;
  margin-left: 0px;
}

.position {
  line-height: 24px;
  padding-top: 10px;
  padding-right: 10px;
  padding-bottom: 10px;
  padding-left: 0px;
  margin-top: 0px;
  margin-right: 0px;
  margin-bottom: 0px;
  margin-left: 0px;
}

.card {
  display: block;
  flex-direction: column;
  align-items: center;
  padding-top: 10px;
  padding-right: 10px;
  padding-bottom: 10px;
  padding-left: 10px;
}

.card-img {
  width: 100%;
  height: 250px;
  margin-top: 0px;
  margin-right: auto;
  margin-bottom: 0px;
  margin-left: auto;
  max-width: 300px;
}

.card-container {
  display: inline-block;
  margin-top: 0px;
  margin-right: 0px;
  margin-bottom: 40px;
  margin-left: 0px;
}

.headings-container {
  padding-top: 0px;
  padding-right: 10px;
  padding-bottom: 0px;
  padding-left: 0px;
}

.team-members-container {
  display: flex;
  flex-wrap: wrap;
}

@media (max-width: 1024px) {
  .name {
    margin-top: 0px;
    margin-right: 0px;
    margin-bottom: 0px;
    margin-left: 0px;
    padding-top: 10px;
    padding-right: 10px;
    padding-bottom: 5px;
    padding-left: 0px;
  }

  .position {
    margin-top: 0px;
    margin-right: 0px;
    margin-bottom: 0px;
    margin-left: 0px;
    padding-top: 0px;
    padding-right: 10px;
    padding-bottom: 10px;
    padding-left: 0px;
  }

  .card-img {
    width: 100%;
    min-width: 100%;
    height: 250px;
    min-height: 230px;
    max-height: 230px;
  }
}

@media (max-width: 768px) {
  .position {
    margin-top: 0px;
    margin-right: 0px;
    margin-bottom: 0px;
    margin-left: 0px;
  }

  .name {
    margin-top: 0px;
    margin-right: 0px;
    margin-bottom: 0px;
    margin-left: 0px;
  }

  .heading-text {
    text-align: center;
    padding-top: 10px;
    padding-right: 0px;
    padding-bottom: 10px;
    padding-left: 0px;
  }

  .sub-heading-text {
    text-align: center;
    color: rgb(122, 122, 122);
    max-width: 500px;
    margin-top: 0px;
    margin-right: auto;
    margin-bottom: 0px;
    margin-left: auto;
  }

  .team-members-container {
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    margin-top: 30px;
    margin-right: 0px;
    margin-bottom: 0px;
    margin-left: 0px;
  }

  .card {
    display: flex;
  }

  .card-img {
    max-width: 300px;
    min-width: 250px;
  }

  .headings-container {
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
  }

  .card {
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
  }

  .heading-text {
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
  }

  .inner-container {
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
  }
}

@media (max-width: 500px) {
  .heading-text {
    text-align: left;
    line-height: 65px;
  }

  .sub-heading-text {
    color: rgb(122, 122, 122);
    text-align: left;
  }

  .name {
    margin-top: 0px;
    margin-right: 0px;
    margin-bottom: 0px;
    margin-left: 0px;
    padding-top: 10px;
    padding-right: 0px;
    padding-bottom: 5px;
    padding-left: 0px;
  }

  .position {
    margin-top: 0px;
    margin-right: 0px;
    margin-bottom: 0px;
    margin-left: 0px;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 10px;
    padding-left: 0px;
  }

  .inner-container {
    margin-top: 80px;
    margin-right: 0px;
    margin-bottom: 50px;
    margin-left: 0px;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
  }

  .card {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .outer-container {
    padding-top: 10px;
    padding-right: 20px;
    padding-bottom: 10px;
    padding-left: 20px;
  }

  .card-img {
    width: 100%;
  }

  .heading-text {
    font-size: 40px;
    line-height: 45px;
  }

  .card-img {
    min-width: auto;
  }
}


@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@200;300;400;600;700;800&amp;display=swap');

*,
*:before,
*:after {
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

body {
  margin: 0;
}

.wk-desk-1 {
  width: 8.333333%;
}

.wk-desk-2 {
  width: 16.666667%;
}

.wk-desk-3 {
  width: 25%;
}

.wk-desk-4 {
  width: 33.333333%;
}

.wk-desk-5 {
  width: 41.666667%;
}

.wk-desk-6 {
  width: 50%;
}

.wk-desk-7 {
  width: 58.333333%;
}

.wk-desk-8 {
  width: 66.666667%;
}

.wk-desk-9 {
  width: 75%;
}

.wk-desk-10 {
  width: 83.333333%;
}

.wk-desk-11 {
  width: 91.666667%;
}

.wk-desk-12 {
  width: 100%;
}

@media (max-width: 1024px) {
  .wk-ipadp-1 {
    width: 8.333333%;
  }

  .wk-ipadp-2 {
    width: 16.666667%;
  }

  .wk-ipadp-3 {
    width: 25%;
  }

  .wk-ipadp-4 {
    width: 33.333333%;
  }

  .wk-ipadp-5 {
    width: 41.666667%;
  }

  .wk-ipadp-6 {
    width: 50%;
  }

  .wk-ipadp-7 {
    width: 58.333333%;
  }

  .wk-ipadp-8 {
    width: 66.666667%;
  }

  .wk-ipadp-9 {
    width: 75%;
  }

  .wk-ipadp-10 {
    width: 83.333333%;
  }

  .wk-ipadp-11 {
    width: 91.666667%;
  }

  .wk-ipadp-12 {
    width: 100%;
  }
}

@media (max-width: 768px) {
  .wk-tab-1 {
    width: 8.333333%;
  }

  .wk-tab-2 {
    width: 16.666667%;
  }

  .wk-tab-3 {
    width: 25%;
  }

  .wk-tab-4 {
    width: 33.333333%;
  }

  .wk-tab-5 {
    width: 41.666667%;
  }

  .wk-tab-6 {
    width: 50%;
  }

  .wk-tab-7 {
    width: 58.333333%;
  }

  .wk-tab-8 {
    width: 66.666667%;
  }

  .wk-tab-9 {
    width: 75%;
  }

  .wk-tab-10 {
    width: 83.333333%;
  }

  .wk-tab-11 {
    width: 91.666667%;
  }

  .wk-tab-12 {
    width: 100%;
  }
}

@media (max-width: 500px) {
  .wk-mobile-1 {
    width: 8.333333%;
  }

  .wk-mobile-2 {
    width: 16.666667%;
  }

  .wk-mobile-3 {
    width: 25%;
  }

  .wk-mobile-4 {
    width: 33.333333%;
  }

  .wk-mobile-5 {
    width: 41.666667%;
  }

  .wk-mobile-6 {
    width: 50%;
  }

  .wk-mobile-7 {
    width: 58.333333%;
  }

  .wk-mobile-8 {
    width: 66.666667%;
  }

  .wk-mobile-9 {
    width: 75%;
  }

  .wk-mobile-10 {
    width: 83.333333%;
  }

  .wk-mobile-11 {
    width: 91.666667%;
  }

  .wk-mobile-12 {
    width: 100%;
  }
}

</style>
