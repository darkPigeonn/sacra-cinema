<template>
    <nav class="navbar">
      <div class="burger-menu">

        <button class="toggle-btn" @click="toggleNavbar">
          <div>
            <i class="fas fa-bars" v-if="!navbarOpen"></i>
            <i class="fas fa-times" v-else></i>
          </div>
        </button>

      </div>
      <ul class="navbar-menu" :class="{ 'navbar-open': navbarOpen }"  >

        <li><a href="/">Beranda</a></li>
        <li><a href="/abouts">Tentang</a></li>
        <!-- <li><a href="/sponsorship">Sponsorship</a></li> -->
        <li><a href="#">Hubungi Kami</a></li>
        <li class="dropdown" @click="toggleDropdown">
          <a href="#">Galeri</a>
          <ul v-if="dropdownOpen" class="dropdown-menu">
            <!-- <li><a href="/galleries/awarding-2024">Awarding 2024</a></li> -->
            <li><a href="/galleries/activity">Kegiatan</a></li>
           
          </ul>
        </li>

      </ul>
    </nav>
  </template>

  <script>
  export default {
    data() {
      return {
        navbarOpen: false,
        animation: '',
        dropdownOpen: false,
      };
    },

    methods: {
      toggleNavbar() {
        this.navbarOpen = !this.navbarOpen;
        this.animation = 'fade-left'
        
      },
      toggleDropdown() {
      this.dropdownOpen = !this.dropdownOpen;
    }
    }
  };
  </script>

  <style scoped lang="scss">
  .li-mobile {
    border-bottom: 0.2px solid black;

  }
  .navbar {
    position: static;
    height: 50px;
    color: #C6972D;
    display: flex;

    align-items: center;
    justify-content: center;
    padding: 0 20px;

    top: 0;
    left: 0;
    right: 0; /* agar navbar menutup di seluruh lebar layar */
    z-index: 1100;
  }

  .navbar-brand, .navbar-menu {
    display: flex;
    align-items: center;
  }

  .navbar-brand .navbar-title {
    font-size: 1.2rem;
  }

  .burger-menu{
    width: 100%;
  }

  .toggle-btn {

    background-color: transparent;
    color: #C6972D;
    border: none;
    cursor: pointer;
    float: right;
  }

  .navbar-menu {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  .navbar-menu li {
    margin-right: 20px;
    font-size: 20px;
  }

  .navbar-menu li a {
    color: #C6972D;
    font-weight: bold;
    text-decoration: none;
  }

  .navbar-menu.navbar-open {
    flex-direction: column;
    position: absolute;
    top: 50px;

    right: 0; /* agar menu menutup di seluruh lebar layar */
    background-color: #C6972D;
    transition: transform 0.3s ease;
    transform: translateY(0);
    border-radius: 5px 0px 0px 5px;
    width: 60%;
  }
  .navbar-menu.navbar-open li a {

    color: white;

  }

  .navbar-menu:not(.navbar-open) {
    display: none;
  }

  @media only screen and (min-width: 768px) {
    .toggle-btn {
      display: none;
    }

    .navbar-menu {
      display: flex !important;
    }

    .navbar-menu li {
      margin-right: 20px;
      margin-bottom: 0;
    }
  }
  .dropdown {
    position: relative;
  }
  
  .dropdown-menu {
    display: block;
    position: absolute;
    top: 100%;
    left: 0;
    color: #C6972D !important;
    padding: 0;
    list-style: none;
    margin: 0;
    border-radius: 0 0 5px 5px;
    width: 100%;
  }
  
  .dropdown-menu li {
    border-top: 1px solid #ffffff;
  }
  
  .dropdown-menu li:first-child {
    border-top: none;
  }
  
  .dropdown-menu li a {
    color: #b5831e90;
    display: block;
    padding: 10px;
    text-decoration: none;
    white-space: nowrap;
  }
  
  .dropdown-menu li a:hover {
  color: #B5821E !important;
  }
  </style>
