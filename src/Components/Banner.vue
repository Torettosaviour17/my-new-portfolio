<template>
  <section ref="bannerSection" id="home" class="banner">
    <div class="container mx-auto px-4">
      <div class="flex flex-col md:flex-row items-center gap-8 md:gap-12">
        <!-- Text Column -->
        <div class="w-full md:w-1/2 lg:w-7/12">
          <div :class="['animate__animated', { 'animate__fadeIn': isVisible }]">
            <span class="tagline">Welcome to my Portfolio</span>
            <h1 class="font-bold leading-tight mb-5 text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
              Hi, I'm Toretto —
              <span class="txt-rotate">
                <span class="wrap">{{ displayText }}</span>
              </span>
            </h1>
            <p class="text-gray-300 text-base sm:text-lg leading-relaxed w-full sm:w-11/12">
              I build fast, responsive, and visually appealing web interfaces using modern frontend
              tools. I’m passionate about turning designs into clean code and crafting seamless user
              experiences. Let’s work together to bring your ideas to life!
            </p>
            <a href="#connect" class="btn-link inline-block mt-8 sm:mt-12 md:mt-16">
              <button class="group flex items-center text-white font-bold text-lg sm:text-xl border border-white px-6 py-3 sm:px-8 sm:py-4 hover:bg-white hover:text-black transition-all duration-300">
                Let’s Connect
                <ArrowRightCircleIcon
                  class="w-5 h-5 sm:w-6 sm:h-6 ml-2 transition-transform duration-300 group-hover:translate-x-1"
                />
              </button>
            </a>
          </div>
        </div>

        <!-- Lottie Animation Column -->
        <div class="w-full md:w-1/2 lg:w-5/12 mt-8 md:mt-0">
          <div :class="['animate__animated', { 'animate__zoomIn': isVisible }]">
            <LottieAnimation
              :src="lottieUrl"
              width="100%"
              height="auto"
              :loop="true"
              :autoplay="true"
              class="max-w-[280px] sm:max-w-[350px] md:max-w-[400px] mx-auto"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { ArrowRightCircleIcon } from '@heroicons/vue/24/outline'
import LottieAnimation from './LottieAnimation.vue'

const lottieUrl = 'https://lottie.host/5f9afe6b-6edf-401d-afe4-9df94ed5a88d/Dr7eV3QQTG.lottie'

// Typing effect
const toRotate = ['Frontend Developer', 'UI/UX Enthusiast', 'Creative Coder']
const loopNum = ref(0)
const isDeleting = ref(false)
const displayText = ref('')
let delta = 300 - Math.random() * 100
const period = 2000
let intervalId: ReturnType<typeof setInterval> | null = null

const tick = () => {
  const i = loopNum.value % toRotate.length
  const fullText = toRotate[i]
  const updatedText = isDeleting.value
    ? fullText.substring(0, displayText.value.length - 1)
    : fullText.substring(0, displayText.value.length + 1)
  displayText.value = updatedText
  if (isDeleting.value) delta = delta / 2
  if (!isDeleting.value && updatedText === fullText) {
    isDeleting.value = true
    delta = period
  } else if (isDeleting.value && updatedText === '') {
    isDeleting.value = false
    loopNum.value++
    delta = 500
  }
}

onMounted(() => {
  intervalId = setInterval(tick, delta)
})
onUnmounted(() => {
  if (intervalId) clearInterval(intervalId)
})

// Intersection Observer for visibility
const bannerSection = ref<HTMLElement | null>(null)
const isVisible = ref(false)
let observer: IntersectionObserver | null = null

onMounted(() => {
  if (bannerSection.value) {
    observer = new IntersectionObserver(
      ([entry]) => {
        isVisible.value = entry.isIntersecting
      },
      { threshold: 0.1 }
    )
    observer.observe(bannerSection.value)
  }
})
onUnmounted(() => {
  if (observer) observer.disconnect()
})
</script>

<style scoped>
/* ---------- Original Banner.js styles (exactly as you provided) ---------- */
.banner {
  margin-top: 0;
  padding: 190px 0 100px 0;
  background-image: url('@/assets/img/banner-bg.png');
  background-position: top center;
  background-size: cover;
  background-repeat: no-repeat;
}
.banner .tagline {
  font-weight: 700;
  letter-spacing: 0.8px;
  padding: 8px 10px;
  background: linear-gradient(
    90.21deg,
    rgba(170, 54, 124, 0.5) -5.91%,
    rgba(74, 47, 189, 0.5) 111.58%
  );
  border: 1px solid rgba(255, 255, 255, 0.5);
  font-size: 20px;
  margin-bottom: 16px;
  display: inline-block;
}
.banner h1 {
  font-weight: 700;
  letter-spacing: 0.8px;
  line-height: 1;
  margin-bottom: 20px;
  display: block;
}
.banner p {
  color: #b8b8b8;
  font-size: 18px;
  letter-spacing: 0.8px;
  line-height: 1.5em;
  width: 96%;
}
.banner button {
  color: #fff;
  font-weight: 700;
  font-size: 20px;
  margin-top: 60px;
  letter-spacing: 0.8px;
  display: flex;
  align-items: center;
}
.banner button svg {
  font-size: 25px;
  margin-left: 10px;
  transition: 0.3s ease-in-out;
  line-height: 1;
}

/* ---------- Responsive overrides (shrinks on mobile) ---------- */
@media (max-width: 767px) {
  .banner {
    padding: 100px 0 60px 0 !important;
  }
  .banner .tagline {
    font-size: 14px !important;
    padding: 4px 8px !important;
  }
  .banner h1 {
    font-size: 28px !important;
    line-height: 1.2 !important;
  }
  .banner p {
    font-size: 14px !important;
    width: 100% !important;
  }
  .banner button {
    font-size: 16px !important;
    margin-top: 30px !important;
    padding: 10px 20px !important;
  }
  .banner button svg {
    font-size: 18px !important;
  }
}
@media (min-width: 768px) and (max-width: 1023px) {
  .banner {
    padding: 140px 0 80px 0 !important;
  }
  .banner h1 {
    font-size: 42px !important;
  }
}
</style>