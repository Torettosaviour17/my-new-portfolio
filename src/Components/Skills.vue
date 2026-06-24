<template>
  <section id="skills" class="relative py-16 md:py-24 overflow-hidden">
    <div class="container mx-auto px-4 relative z-10">
      <div
        class="bg-[#151515] bg-opacity-70 backdrop-blur-sm rounded-[40px] md:rounded-[64px] p-6 md:p-12 lg:p-16 shadow-xl border border-[#aa367c] border-opacity-30"
      >
        <div class="text-center mb-10">
          <h2
            class="text-3xl sm:text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#aa367c] to-[#4a2fbd]"
          >
            My Skillset
          </h2>
          <p class="text-[#d1d1e9] max-w-2xl mx-auto mt-4 text-base md:text-lg">
            I'm a frontend developer passionate about building clean, responsive, and interactive
            web apps. I work with modern tools to bring interfaces to life with great performance
            and design.
          </p>
        </div>

        <Carousel
          :items-to-show="itemsToShow"
          :wrap-around="true"
          :transition="600"
          :autoplay="3000"
          :pause-autoplay-on-hover="true"
          :breakpoints="breakpoints"
        >
          <Slide v-for="(skill, index) in skills" :key="index">
            <div class="px-4 py-6">
              <SkillCard :name="skill.name" :value="skill.value" />
            </div>
          </Slide>

          <template #addons>
            <Pagination />
          </template>
        </Carousel>
      </div>
    </div>

    <div class="absolute top-1/4 left-0 w-1/3 h-full opacity-10 pointer-events-none">
      <div class="absolute top-0 -left-10 w-64 h-64 rounded-full bg-[#4a2fbd] blur-3xl"></div>
    </div>
    <div class="absolute bottom-1/3 right-0 w-1/4 h-full opacity-10 pointer-events-none">
      <div class="absolute bottom-0 -right-10 w-48 h-48 rounded-full bg-[#aa367c] blur-3xl"></div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Carousel, Slide, Pagination } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'
import SkillCard from './SkillCard.vue'

const breakpoints = {
  3000: { itemsToShow: 5 },
  1024: { itemsToShow: 3 },
  464: { itemsToShow: 2 },
  0: { itemsToShow: 1 },
}

const itemsToShow = 3

const skills = [
  { name: 'React', value: 95 },
  { name: 'Vue.js', value: 82 },
  { name: 'TypeScript', value: 88 },
  { name: 'JavaScript', value: 89 },
  { name: 'Tailwind CSS', value: 92 },
  { name: 'HTML & CSS', value: 97 },
  { name: 'Responsive Design', value: 90 },
  { name: 'UI Design', value: 82 },
  { name: 'Version Control', value: 93 },
  { name: 'WordPress', value: 85 },
  { name: 'Next.js', value: 80 },
  { name: 'Node.js', value: 75 },
  { name: 'Express.js', value: 70 },
]
</script>

<style scoped>
:deep(.carousel__slide) {
  padding: 0 20px;
}
:deep(.carousel__pagination) {
  margin-top: 20px;
}
</style>
