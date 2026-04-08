<template>
  <section id="home" class="banner bg-black-600">
    <div class="container">
      <div class="row align-items-center p-2 md:p-0">
        <!-- Text Column -->
        <div class="col-12 col-md-6 col-xl-7">
          <div v-if="isVisible" class="animate__animated animate__fadeIn">
            <span class="tagline">Welcome to my Portfolio</span>
            <h1 class="text-[45px] sm:text-[55px] md:text-[65px]">
              {{ `Hi, I'm Toretto —` }}
              <span class="txt-rotate">
                <span class="wrap">{{ displayText }}</span>
              </span>
            </h1>
            <p>
              I build fast, responsive, and visually appealing web interfaces using modern frontend
              tools. I’m passionate about turning designs into clean code and crafting seamless user
              experiences. Let’s work together to bring your ideas to life!
            </p>
            <a href="#connect" class="btn-link">
              <button class="flex items-center">
                Let’s Connect
                <ArrowRightCircleIcon
                  class="w-6 h-6 ml-2 transition-transform duration-300 group-hover:translate-x-1"
                />
              </button>
            </a>
          </div>
        </div>

        <!-- Lottie Animation Column -->
        <div class="col-12 col-md-6 col-xl-5">
          <div v-if="isVisible" class="animate__animated animate__zoomIn">
            <LottieAnimation
              :src="lottieUrl"
              width="350"
              height="350"
              :loop="true"
              :autoplay="true"
              class="w-full md:w-[350px] md:h-[350px] mx-auto pt-4 md:pt-0"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useIntersectionObserver } from '@vueuse/core'
import { ArrowRightCircleIcon } from '@heroicons/vue/24/outline'
import LottieAnimation from './LottieAnimation.vue'

// Lottie animation source
const lottieUrl = 'https://lottie.host/5f9afe6b-6edf-401d-afe4-9df94ed5a88d/Dr7eV3QQTG.lottie'

// Typing effect state
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

  if (isDeleting.value) {
    delta = delta / 2
  }

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

// Intersection observer to detect visibility
const target = ref(null)
const { isVisible } = useIntersectionObserver(target, { threshold: 0.1 })
</script>

<style scoped>
/* Same as before – custom styles for banner */
.banner {
  margin-top: 0;
  padding: 190px 0 100px 0;
  background-image: url('@/assets/banner-bg.png');
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
}
.banner button svg {
  transition: 0.3s ease-in-out;
}
.banner button:hover svg {
  transform: translateX(5px);
}
</style>
