<template>
  <div ref="container" :style="{ width: widthStr, height: heightStr }"></div>
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

// Convert width/height to string with px if number
const widthStr = typeof props.width === 'number' ? `${props.width}px` : props.width
const heightStr = typeof props.height === 'number' ? `${props.height}px` : props.height

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
  if (animation) animation.destroy()
})
</script>