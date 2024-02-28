<template>
    <nav class="navbar">
      <button class="toggle-btn" @click="toggleNavbar">
        <i class="fas fa-bars" v-if="!navbarOpen"></i>
        <i class="fas fa-times" v-else></i>
      </button>
      <ul class="navbar-menu" :class="{ 'navbar-open': navbarOpen }">
        <li><a href="#">Beranda</a></li>
        <li><a href="#">Panitia</a></li>
        <li><a href="#">Hubungi Kami</a></li>
      </ul>
    </nav>
  </template>

  <script>
  export default {
    data() {
      return {
        navbarOpen: false
      };
    },
    methods: {
      toggleNavbar() {
        this.navbarOpen = !this.navbarOpen;
      }
    }
  };
  </script>

  <style scoped lang="scss">
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

  .toggle-btn {
    background-color: transparent;
    color: #C6972D;
    border: none;
    cursor: pointer;
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
    left: 0;
    right: 0; /* agar menu menutup di seluruh lebar layar */
    background-color: #333;
    transition: transform 0.3s ease;
    transform: translateY(0);
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
  </style>
