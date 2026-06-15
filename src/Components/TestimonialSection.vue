<template>
  <section
    id="testimonials"
    class="py-28 px-4 text-center bg-[#121212] text-white relative overflow-hidden"
  >
    <div class="absolute inset-0 z-0">
      <video
        ref="videoRef"
        autoplay
        loop
        muted
        playsinline
        :class="[
          'w-full h-full object-cover transition-opacity duration-1000',
          isVideoLoaded ? 'opacity-100' : 'opacity-0',
        ]"
      >
        <source src="/spacetestmonalimg.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div
        class="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-60 dark:opacity-70"
      />
      <div class="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent" />
    </div>

    <div class="max-w-4xl mx-auto z-10 relative">
      <h2 class="text-4xl font-bold mb-4">
        <span class="bg-gradient-to-r from-[#AA367C] to-[#4A2FBD] bg-clip-text text-transparent">
          Testimonials
        </span>
      </h2>
      <p class="text-xl italic mt-6 animate-pulse text-slate-200 tracking-wide">
        🚧 Coming soon... Real ones loading 🔥
      </p>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

// State managing video visibility
const isVideoLoaded = ref(false)

// Properly typed Template Ref for the HTML5 Video element
const videoRef = ref<HTMLVideoElement | null>(null)

onMounted(() => {
  if (videoRef.value) {
    // When the browser has loaded the current frame data, flip the switch
    videoRef.value.onloadeddata = () => {
      isVideoLoaded.value = true
    }
  }
})
</script>
