<template>
  <div
    class="bg-white rounded-[55px] text-[#121212] relative top-[-50px] px-6 py-12 md:px-[125px] md:py-[85px] mb-[80px] mt-[-122px] mx-auto"
  >
    <div class="flex flex-col lg:flex-row items-start lg:items-center gap-8 md:px-16">
      <div class="w-full lg:w-5/12">
        <h3 class="font-bold tracking-[0.5px] leading-[1.2em] text-[24px] sm:text-[34px] mb-4">
          Subscribe to our Newsletter
          <br class="hidden sm:inline" />
          & Stay tuned for exciting updates!
        </h3>

        <div v-if="submitted" class="transition-all duration-300">
          <p class="text-green-600 font-semibold mb-4">
            Thanks for subscribing! You'll be the first to hear when we drop something new 💥
          </p>
        </div>
      </div>

      <div class="w-full lg:w-7/12">
        <form @submit.prevent="handleSubmit">
          <div class="relative flex items-center p-[5px] rounded-[20px] z-0">
            <div
              class="absolute inset-0 m-[-1px] rounded-[20px] bg-gradient-to-r from-[#AA367C] to-[#4A2FBD]"
            ></div>
            <div class="absolute inset-0 rounded-[20px] bg-white"></div>

            <input
              type="email"
              v-model="email"
              placeholder="Email Address"
              class="relative w-full bg-transparent border-0 text-[#121212] font-medium px-[15px] py-2 outline-none"
              required
            />

            <button
              type="submit"
              class="relative z-10 bg-gradient-to-r from-[#AA367C] to-[#4A2FBD] text-white font-medium tracking-[0.5px] rounded-[18px] px-[25px] py-[10px] md:px-[65px] md:py-[20px] ml-4 transition-transform duration-200 active:scale-95"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onUnmounted } from 'vue'

// Local component state engine variables
const email = ref('')
const submitted = ref(false)

// Native Node/Window environment timeout reference layout hooks
let timeoutId: ReturnType<typeof setTimeout> | null = null

const handleSubmit = () => {
  // Validate basic inline check safely
  if (email.value && email.value.includes('@')) {
    submitted.value = true
    email.value = ''

    // Reset active background banners running concurrently
    if (timeoutId) {
      clearTimeout(timeoutId)
      timeoutId = null
    }

    // Auto dismiss validation update alert banner after 5s steps
    timeoutId = setTimeout(() => {
      submitted.value = false
    }, 5000)
  }
}

// Lifecycle Hook: Instantly prevent internal tracking script leaks if page shifts
onUnmounted(() => {
  if (timeoutId) clearTimeout(timeoutId)
})
</script>
