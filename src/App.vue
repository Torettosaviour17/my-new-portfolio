<template>
  <div class="hero-bg">
    <NavBar />
    <Banner />
    <!-- <Skills />
    <Projects />
    <Testimonials />
    <Contact />
    <Footer /> -->
  </div>
</template>

<script setup lang="ts">
import NavBar from './components/NavBar.vue'
import Banner from './components/Banner.vue'
// import Skills from './components/Skills.vue'
// import Projects from './components/Projects.vue'
// import Testimonials from './components/Testimonials.vue'
// import Contact from './components/Contact.vue'
// import Footer from './components/Footer.vue'
</script>

<style scoped>
.hero-bg {
  background-image: url('@/assets/banner-bg.png');
  background-position: top center;
  background-size: cover;
  background-repeat: no-repeat;
  min-height: 100vh;
}
</style>