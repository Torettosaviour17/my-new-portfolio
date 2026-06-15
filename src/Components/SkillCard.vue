<template>
  <div
    ref="cardRef"
    class="flex flex-col items-center group p-6 rounded-2xl bg-slate-900/40 backdrop-blur-md border border-white/5 transition-all duration-500 hover:border-[#aa367c]/40 hover:shadow-[0_0_30px_rgba(170,54,124,0.15)] hover:-translate-y-1"
  >
    <div class="w-40 h-40 relative mb-4">
      <div
        class="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-xl pointer-events-none"
        :style="{ background: `radial-gradient(circle, ${stopColor1}33 0%, ${stopColor2}00 70%)` }"
      ></div>

      <svg class="w-full h-full transform -rotate-90 drop-shadow-[0_0_6px_rgba(74,47,189,0.2)]">
        <circle
          cx="80"
          cy="80"
          r="70"
          fill="none"
          stroke="rgba(255,255,255,0.05)"
          stroke-width="8"
        />
        <circle
          cx="80"
          cy="80"
          r="70"
          fill="none"
          :stroke="gradientUrl"
          stroke-width="10"
          stroke-linecap="round"
          :stroke-dasharray="circumference"
          :stroke-dashoffset="strokeDashOffset"
          class="transition-all duration-100 ease-out"
        />
      </svg>

      <div class="absolute inset-0 flex flex-col items-center justify-center">
        <span
          class="text-white text-3xl font-extrabold tracking-tighter tabular-nums drop-shadow-md"
        >
          {{ Math.round(displayValue)
          }}<span class="text-sm font-medium text-white/60 ml-0.5">%</span>
        </span>
      </div>

      <svg style="height: 0; width: 0; position: absolute">
        <defs>
          <linearGradient :id="gradientId" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" :stop-color="stopColor1" />
            <stop offset="100%" :stop-color="stopColor2" />
          </linearGradient>
        </defs>
      </svg>
    </div>

    <h5
      class="text-slate-300 font-semibold text-lg mt-2 text-center tracking-wide group-hover:text-white transition-colors duration-300"
    >
      {{ name }}
    </h5>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onUnmounted } from 'vue'
import { useIntersectionObserver } from '@vueuse/core'

const props = defineProps<{
  name: string
  value: number
}>()

// Constants & Gradients
const stopColor1 = '#aa367c'
const stopColor2 = '#4a2fbd'
const gradientId = `gradient-${props.name.toLowerCase().replace(/[^a-z0-9]/g, '-')}`
const gradientUrl = `url(#${gradientId})`
const circumference = 2 * Math.PI * 70 // ~439.82

// State
const displayValue = ref(0)
const cardRef = ref<HTMLElement | null>(null)
let animationFrameId: number | null = null

// Compute dynamic dashoffset based on real-time display value
const strokeDashOffset = computed(() => {
  return circumference - (displayValue.value / 100) * circumference
})

// Quintic Out Easing Function for premium, snappy-then-smooth feel
const easeOutQuint = (x: number): number => {
  return 1 - Math.pow(1 - x, 5)
}

// Smooth Animation Core using RequestAnimationFrame
const animateProgress = () => {
  const duration = 1500 // Total animation duration in ms
  const startTime = performance.now()
  const targetValue = props.value

  const update = (currentTime: number) => {
    const elapsed = currentTime - startTime
    const progress = Math.min(elapsed / duration, 1) // Cap at 1 (100%)

    // Apply easing to the progress fraction
    const easedProgress = easeOutQuint(progress)
    displayValue.value = easedProgress * targetValue

    if (progress < 1) {
      animationFrameId = requestAnimationFrame(update)
    }
  }

  animationFrameId = requestAnimationFrame(update)
}

// Proper VueUse Intersection Observer setup
const { stop } = useIntersectionObserver(
  cardRef,
  (entries) => {
    const isIntersecting = entries[0]?.isIntersecting
    if (isIntersecting) {
      animateProgress()
      stop() // Trigger once and stop observing to save memory
    }
  },
  { threshold: 0.15 },
)

onUnmounted(() => {
  if (animationFrameId) cancelAnimationFrame(animationFrameId)
  stop()
})
</script>
