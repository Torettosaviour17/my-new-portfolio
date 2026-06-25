<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <section ref="bannerSection" id="home" class="banner">
    <div class="container mx-auto px-4">
      <div class="flex flex-col md:flex-row items-center gap-8 md:gap-12">
        <div class="w-full md:w-1/2 lg:w-7/12">
          <div :class="['animate__animated', { animate__fadeIn: isVisible }]">
            <span class="tagline"> Full Stack Developer • React • Vue • Node.js • MongoDB </span>

            <h1 class="font-bold leading-tight text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
              Hi, I'm Toretto —
              <span class="txt-rotate">
                <span class="wrap">{{ displayText }}</span>
              </span>
            </h1>

            <p class="text-gray-300 text-base sm:text-lg leading-relaxed w-full sm:w-11/12">
              Full Stack Web Developer with 3+ years of experience building scalable web
              applications using React, Vue.js, Next.js, TypeScript, Node.js, Express.js, MongoDB,
              and Tailwind CSS.

              <br /><br />

              I specialize in building fintech platforms, trading dashboards, enterprise solutions,
              and modern web applications that combine exceptional user experiences with robust
              backend systems.

              <br /><br />

              My notable projects include GoalTab, Vivstock, Richascend, and the International
              Journal of Media and Sustainable Development (IJMSD).
            </p>

            <!-- Stats -->
            <div class="flex flex-wrap gap-8 mt-8 text-white">
              <div>
                <h3 class="text-3xl font-bold">3+</h3>
                <p class="text-gray-300">Years Experience</p>
              </div>

              <div>
                <h3 class="text-3xl font-bold">4+</h3>
                <p class="text-gray-300">Major Projects</p>
              </div>

              <div>
                <h3 class="text-3xl font-bold">15+</h3>
                <p class="text-gray-300">Technologies</p>
              </div>
            </div>

            <a href="#connect" class="btn-link inline-block">
              <button
                class="group flex items-center text-white font-bold text-lg sm:text-xl border border-white px-6 py-3 sm:px-8 sm:py-4 hover:bg-white hover:text-black transition-all duration-300"
              >
                Let's Connect
                <ArrowRightCircleIcon
                  class="w-5 h-5 sm:w-6 sm:h-6 ml-2 transition-transform duration-300 group-hover:translate-x-1"
                />
              </button>
            </a>
          </div>
        </div>

        <div class="w-full md:w-1/2 lg:w-5/12 mt-8 md:mt-0">
          <div
            :class="['animate__animated', { animate__zoomIn: isVisible }]"
            class="flex justify-center"
          >
            <div
              class="lottie-container"
              style="
                width: 350px;
                height: 350px;
                display: flex;
                align-items: center;
                justify-content: center;
              "
            >
              <DotLottieVue
                :key="currentLottieIndex"
                :src="lottieUrls[currentLottieIndex]"
                autoplay
                loop
                style="width: 100%; height: 100%; object-fit: contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { ArrowRightCircleIcon } from '@heroicons/vue/24/outline'
import { DotLottieVue } from '@lottiefiles/dotlottie-vue'
import { useIntersectionObserver } from '@vueuse/core'

const lottieUrls = [
  'https://lottie.host/5f9afe6b-6edf-401d-afe4-9df94ed5a88d/Dr7eV3QQTG.lottie',
  '/lottie/Developer.lottie',
]

const currentLottieIndex = ref(0)

const toRotate = ['Full Stack Developer', 'React & Vue Specialist', 'Node.js & MongoDB Developer']

const loopNum = ref(0)
const isDeleting = ref(false)
const displayText = ref('')
const period = 2000

let typingTimeoutId: ReturnType<typeof setTimeout> | null = null
let lottieIntervalId: ReturnType<typeof setInterval> | null = null

const tick = () => {
  const i = loopNum.value % toRotate.length
  const fullText = toRotate[i] || ''

  const updatedText = isDeleting.value
    ? fullText.substring(0, displayText.value.length - 1)
    : fullText.substring(0, displayText.value.length + 1)

  displayText.value = updatedText

  let currentDelta = 300 - Math.random() * 100

  if (isDeleting.value) currentDelta /= 2

  if (!isDeleting.value && updatedText === fullText) {
    isDeleting.value = true
    currentDelta = period
  } else if (isDeleting.value && updatedText === '') {
    isDeleting.value = false
    loopNum.value++
    currentDelta = 500
  }

  typingTimeoutId = setTimeout(tick, currentDelta)
}

const bannerSection = ref<HTMLElement | null>(null)
const isVisible = ref(false)

useIntersectionObserver(
  bannerSection,
  (entries) => {
    if (entries[0]?.isIntersecting) {
      isVisible.value = true
    }
  },
  { threshold: 0.1 },
)

onMounted(() => {
  tick()

  lottieIntervalId = setInterval(() => {
    currentLottieIndex.value = (currentLottieIndex.value + 1) % lottieUrls.length
  }, 10000)
})

onUnmounted(() => {
  if (typingTimeoutId) clearTimeout(typingTimeoutId)
  if (lottieIntervalId) clearInterval(lottieIntervalId)
})
</script>
