<template>
  <div ref="container" :style="{ width, height }"></div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import lottie from 'lottie-web'

const props = defineProps<{
  src: string
  width?: string | number
  height?: string | number
  loop?: boolean
  autoplay?: boolean
}>()

const container = ref<HTMLElement | null>(null)
let animation: any

onMounted(() => {
  if (container.value) {
    animation = lottie.loadAnimation({
      container: container.value,
      renderer: 'svg',
      loop: props.loop ?? true,
      autoplay: props.autoplay ?? true,
      path: props.src,
    })
  }
})

onUnmounted(() => {
  if (animation) {
    animation.destroy()
  }
})
</script>