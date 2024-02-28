<template>
    <div>
        <Hero />

        <!-- Latar Belakang -->
        <div class="section-excerpt row">
            <div class="col-12 col-sm-6 section-introduction">
                <h3>Latar Belakang</h3>
            </div>
            <div class="col-12 col-sm-6">
                <p>Kesadaran Gereja akan pentingnya merasul lewat media sosial dapat ditemukan dalam Dekrit Inter Mirifica Konsili Vatikan II. Kesadaran itu terungkap dalam artikel 2: “Bunda Gereja menyadari, bahwa upaya-upaya itu, kalau digunakan dengan tepat, dapat berjasa besar bagi umat manusia, sebab sangat membantu untuk menyegarkan hati dan mengembangkan budi, dan untuk menyiarkan serta memantapkan Kerajaan Allah. Kepentingan Gereja terhadap dunia media sosial adalah mewartakan Injil.”</p>
                <a style="align-items: end;" href="#">Baca lebih lanjut...</a>
            </div>
        </div>

        <!-- Tema -->
        <div class="section-theme">
            <h1>Tema</h1>
            <p>Tema Festival Film tahun 2024 sesuai dengan fokus pastoral Keuskupan Surabaya ialah Gereja yang Satu Kudus Katolik Apostolik.</p>
        </div>

        <div class="section-teams">
            <section class="section-team">
		<div class="container">
			<!-- Start Header Section -->
			<div class="row justify-content-center text-center">
				<div class="col-md-8 col-lg-6">
					<div class="header-section">
						<h2 class="title">Narasumber</h2>
					</div>
				</div>
			</div>
			<!-- / End Header Section -->
			<div class="row">
				<!-- Start Single Person -->
				<div class="col-sm-6 col-lg-4 col-xl-3">
					<div class="single-person">
						<div class="person-image">
							<img src="/assets/images/rdtheo.jpg" alt="">

						</div>
						<div class="person-info">
							<h3 class="full-name">RD. Robertus Theo Elno Respati.</h3>
							<span class="speciality">Ketua Komsos Keuskupan Surabaya</span>
						</div>
					</div>
				</div>
				<!-- / End Single Person -->
				<!-- Start Single Person -->
				<div class="col-sm-6 col-lg-4 col-xl-3">
					<div class="single-person">
						<div class="person-image">
							<img src="/assets/images/brams.jpg" alt="">

						</div>
						<div class="person-info">
							<h3 class="full-name">Valens Brama P.</h3>
							<span class="speciality">Director Film</span>
						</div>
					</div>
				</div>
				<!-- / End Single Person -->
				<!-- Start Single Person -->
				<div class="col-sm-6 col-lg-4 col-xl-3">
					<div class="single-person">
						<div class="person-image">
							<img src="/assets/images/ohbert.jpg" alt="">

						</div>
						<div class="person-info">
							<h3 class="full-name">Angelica Ohbert P.</h3>
							<span class="speciality">Produser Film</span>
						</div>
					</div>
				</div>
				<!-- / End Single Person -->
				<!-- Start Single Person -->
				<div class="col-sm-6 col-lg-4 col-xl-3">
					<div class="single-person">
						<div class="person-image">
							<img src="/assets/images/jenifer.jpg" alt="">

						</div>
						<div class="person-info">
							<h3 class="full-name">Jenifer Odilia</h3>
							<span class="speciality">Content Creator</span>
						</div>
					</div>
				</div>
				<!-- / End Single Person -->
            </div>
		</div>
	</section>

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

</style>
