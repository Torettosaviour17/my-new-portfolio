<template>
  <section class="relative py-16 md:py-24 overflow-hidden bg-black" id="projects">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div
        ref="headerRef"
        class="text-center mb-12 opacity-0 transform translate-y-4 transition-all duration-700 ease-out"
        :class="{ 'opacity-100 translate-y-0': isHeaderVisible }"
      >
        <h2
          class="text-3xl sm:text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#aa367c] to-[#4a2fbd]"
        >
          Projects
        </h2>
        <p
          class="text-[#d1d1e9] max-w-2xl mx-auto mt-4 text-base md:text-lg tracking-wide leading-relaxed"
        >
          Explore my recent web projects — from landing pages and dashboards to interactive
          frontends built with modern tools like React, Tailwind CSS, and Vue.js.
        </p>
      </div>

      <div class="flex justify-center mb-12">
        <div
          class="flex flex-col sm:flex-row bg-white/10 p-1.5 rounded-2xl sm:rounded-full w-full max-w-xl gap-2 sm:gap-0 backdrop-blur-sm border border-white/5"
        >
          <button
            @click="activeTab = 'first'"
            :class="[
              'w-full py-3 text-base font-medium tracking-wide rounded-xl sm:rounded-full transition-all duration-300 text-center text-white',
              activeTab === 'first'
                ? 'bg-gradient-to-r from-[#aa367c] to-[#4a2fbd] shadow-lg shadow-[#aa367c]/20'
                : 'hover:bg-white/5',
            ]"
          >
            Projects
          </button>
          <button
            @click="activeTab = 'second'"
            :class="[
              'w-full py-3 text-base font-medium tracking-wide rounded-xl sm:rounded-full transition-all duration-300 text-center text-white',
              activeTab === 'second'
                ? 'bg-gradient-to-r from-[#aa367c] to-[#4a2fbd] shadow-lg shadow-[#aa367c]/20'
                : 'hover:bg-white/5',
            ]"
          >
            Coming Soon
          </button>
          <button
            @click="activeTab = 'third'"
            :class="[
              'w-full py-3 text-base font-medium tracking-wide rounded-xl sm:rounded-full transition-all duration-300 text-center text-white',
              activeTab === 'third'
                ? 'bg-gradient-to-r from-[#aa367c] to-[#4a2fbd] shadow-lg shadow-[#aa367c]/20'
                : 'hover:bg-white/5',
            ]"
          >
            Other Builds
          </button>
        </div>
      </div>

      <div
        ref="contentRef"
        class="opacity-0 transition-opacity duration-500"
        :class="{ 'opacity-100': isContentVisible }"
      >
        <div
          v-if="activeTab === 'first'"
          class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-items-center"
        >
          <div v-for="(project, index) in projects" :key="index" class="w-full max-w-sm">
            <a :href="project.link" target="_blank" rel="noopener noreferrer" class="block group">
              <div
                class="relative overflow-hidden rounded-2xl shadow-xl h-60 border border-white/5 transition-all duration-500 group-hover:scale-[1.03] group-hover:shadow-[0_0_30px_rgba(170,54,124,0.25)]"
              >
                <img
                  :src="project.imgUrl"
                  :alt="project.title"
                  class="w-full h-full object-cover"
                />
                <div
                  class="absolute inset-0 bg-gradient-to-br from-[rgba(170,54,124,0.9)] to-[rgba(74,47,189,0.9)] opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-center items-center p-6 text-center transform translate-y-2 group-hover:translate-y-0"
                >
                  <h4 class="text-white text-2xl font-bold mb-2 tracking-tight">
                    {{ project.title }}
                  </h4>
                  <p class="text-white/90 text-sm leading-snug">{{ project.description }}</p>
                </div>
              </div>
            </a>
          </div>
        </div>

        <div v-if="activeTab === 'second'" class="flex justify-center">
          <div
            class="bg-[#1a1a2e]/60 border border-white/5 rounded-2xl p-8 md:p-12 max-w-xl text-center backdrop-blur-md shadow-2xl"
          >
            <div class="text-6xl mb-4 animate-bounce">🚀</div>
            <h3 class="text-2xl font-bold text-white mb-3">New Projects Incoming</h3>
            <p class="text-[#d1d1e9] leading-relaxed text-sm md:text-base">
              I'm currently working on exciting new frontend projects. Stay tuned for releases
              coming soon!
            </p>
            <div class="mt-6 flex justify-center">
              <div
                class="h-1.5 w-24 bg-gradient-to-r from-[#aa367c] to-[#4a2fbd] rounded-full animate-pulse"
              ></div>
            </div>
          </div>
        </div>

        <div
          v-if="activeTab === 'third'"
          class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-items-center"
        >
          <div v-for="(build, index) in otherBuilds" :key="index" class="w-full max-w-sm">
            <a :href="build.link" target="_blank" rel="noopener noreferrer" class="block group">
              <div
                class="relative overflow-hidden rounded-2xl shadow-xl h-60 border border-white/5 transition-all duration-500 group-hover:scale-[1.03] group-hover:shadow-[0_0_30px_rgba(170,54,124,0.25)]"
              >
                <img :src="build.imgUrl" :alt="build.title" class="w-full h-full object-cover" />
                <div
                  class="absolute inset-0 bg-gradient-to-br from-[rgba(170,54,124,0.9)] to-[rgba(74,47,189,0.9)] opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-center items-center p-6 text-center transform translate-y-2 group-hover:translate-y-0"
                >
                  <h4 class="text-white text-2xl font-bold mb-2 tracking-tight">
                    {{ build.title }}
                  </h4>
                  <p class="text-white/90 text-sm leading-snug">{{ build.description }}</p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>

    <div class="absolute top-0 right-0 w-96 h-96 opacity-20 pointer-events-none">
      <div class="absolute top-10 right-10 w-72 h-72 rounded-full bg-[#aa367c] blur-3xl"></div>
      <div class="absolute bottom-10 right-20 w-64 h-64 rounded-full bg-[#4a2fbd] blur-3xl"></div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useIntersectionObserver } from '@vueuse/core'

// Image Imports
import projImg1 from '/project-img1.png'
import projImg2 from '/project-img2.png'
import projImg3 from '/project-img3.png'
import nigerialorem from '/nigerialorem.png'
import bellaview from '/bellaview.png'
import vivstock from '/vivstock.png'
import phonebookapp from '/phonebookapp.png'
import internationalimg from '/international-img.png'
import enigneer from '/enigneer.png'
import chatBotimg from '/chatbot-img.png'
import realestatelisting from '/real-estate-listing.png'
import goaltab from '/goaltabs.png'

// Tab Control State
const activeTab = ref<'first' | 'second' | 'third'>('first')

// Visibility / Animation triggers via VueUse
const headerRef = ref<HTMLElement | null>(null)
const contentRef = ref<HTMLElement | null>(null)
const isHeaderVisible = ref(false)
const isContentVisible = ref(false)

// Replace the header observer block with this:
useIntersectionObserver(
  headerRef,
  (entries) => {
    const entry = entries[0]
    if (entry?.isIntersecting) {
      isHeaderVisible.value = true
    }
  },
  { threshold: 0.1 },
)

// Replace the content observer block with this:
useIntersectionObserver(
  contentRef,
  (entries) => {
    const entry = entries[0]
    if (entry?.isIntersecting) {
      isContentVisible.value = true
    }
  },
  { threshold: 0.05 },
)

// Data Arrays
const projects = [
  {
    title: 'GoalTab',
    description: 'smart saving and service app',
    imgUrl: goaltab,
    link: 'https://goalstab.vercel.app//',
  },
  {
    title: 'Richaascend',
    description: 'Engineering company website with modern design',
    imgUrl: enigneer,
    link: 'https://richascend-v2.vercel.app/',
  },
  {
    title: 'International Journal',
    description: 'Clean journal website built with React and Tailwind',
    imgUrl: internationalimg,
    link: 'https://internation-journal.vercel.app/',
  },
  {
    title: 'Realestate listing',
    description: 'built with next.js',
    imgUrl: realestatelisting,
    link: 'https://real-estate-listing-lovat.vercel.app/',
  },
  {
    title: 'Delve Vue',
    description: 'Vue.js site with scroll animation',
    imgUrl: projImg1,
    link: 'https://delve-vue.vercel.app/',
  },
  {
    title: 'Nigeria Lorem',
    description: 'Responsive site with custom styling',
    imgUrl: nigerialorem,
    link: 'https://nigeria-lorem.vercel.app/',
  },
]

const otherBuilds = [
  {
    title: 'Phone Book',
    description: 'Basic phonebook with JavaScript state logic',
    imgUrl: phonebookapp,
    link: 'https://phonebook-nine-gray.vercel.app/',
  },
  {
    title: 'Vivstock',
    description: 'Responsive stock market dashboard UI',
    imgUrl: vivstock,
    link: 'https://vivstock-responseness.vercel.app/',
  },
  {
    title: 'First React File',
    description: 'First fully built React project from scratch',
    imgUrl: projImg2,
    link: 'https://my-first-sussesful-react-file-writen-on-my-own.vercel.app/',
  },
  {
    title: 'chat application',
    description: 'a chat-app using react typescript',
    imgUrl: chatBotimg,
    link: 'https://chatbot-eight-neon.vercel.app/',
  },
  {
    title: 'Nigeria Page',
    description: 'Static website showcasing Nigerian elements',
    imgUrl: projImg3,
    link: 'https://nigeria-page.vercel.app/',
  },
  {
    title: 'Belle View',
    description: 'Real estate landing page with React/Tailwind',
    imgUrl: bellaview,
    link: 'https://belle-vie-one.vercel.app/',
  },
]
</script>
