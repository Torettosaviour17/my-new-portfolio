<template>
  <div class="hero-bg">
    <NavBar />
    <Banner />
  </div>
  <Skills />
  <Projects />
  <Testimonials />
  <Contact />
  <!-- <Footer /> -->
</template>

<script setup lang="ts">
import NavBar from './Components/NavBar.vue'
import Banner from './Components/Banner.vue'
import Skills from './Components/Skills.vue'
import Projects from './Components/ProjectsFile.vue'
import Testimonials from './Components/TestimonialSection.vue'
import Contact from './Components/ContactSection.vue'
// import Footer from './Components/Footer.vue'
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
