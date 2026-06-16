<template>
  <div
    class="w-full max-w-xl mx-auto p-6 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl shadow-xl"
  >
    <h2 class="text-3xl font-bold text-white mb-6 tracking-tight">Contact Us</h2>

    <form @submit.prevent="handleSubmit" class="space-y-5">
      <div class="flex flex-col space-y-2">
        <label for="name" class="text-sm font-semibold text-gray-300 tracking-wide">Name</label>
        <input
          id="name"
          type="text"
          v-model="formDetails.name"
          class="w-full bg-white/10 border border-white/20 rounded-xl text-white placeholder:text-white/40 px-4 py-3 text-base outline-none transition-all duration-300 focus:bg-white focus:text-[#121212] focus:border-white"
          placeholder="Your Name"
          required
        />
      </div>

      <div class="flex flex-col space-y-2">
        <label for="email" class="text-sm font-semibold text-gray-300 tracking-wide">Email</label>
        <input
          id="email"
          type="email"
          v-model="formDetails.email"
          class="w-full bg-white/10 border border-white/20 rounded-xl text-white placeholder:text-white/40 px-4 py-3 text-base outline-none transition-all duration-300 focus:bg-white focus:text-[#121212] focus:border-white"
          placeholder="you@example.com"
          required
        />
      </div>

      <div class="flex flex-col space-y-2">
        <label for="message" class="text-sm font-semibold text-gray-300 tracking-wide"
          >Message</label
        >
        <textarea
          id="message"
          v-model="formDetails.message"
          :rows="4"
          class="w-full bg-white/10 border border-white/20 rounded-xl text-white placeholder:text-white/40 px-4 py-3 text-base outline-none transition-all duration-300 resize-none focus:bg-white focus:text-[#121212] focus:border-white"
          placeholder="Leave your message here..."
          required
        />
      </div>

      <button
        type="submit"
        class="w-full bg-white text-black font-bold py-3.5 px-6 rounded-xl text-lg tracking-wide border border-transparent transition-all duration-300 hover:bg-transparent hover:text-white hover:border-white active:scale-[0.98]"
      >
        {{ buttonText }}
      </button>
    </form>

    <div
      v-if="statusVisible"
      :class="[
        'mt-4 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 shadow-md',
        status.success
          ? 'bg-green-500/20 text-green-300 border border-green-500/30'
          : 'bg-red-500/20 text-red-300 border border-red-500/30',
      ]"
    >
      {{ status.message }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, onUnmounted } from 'vue'

// TypeScript Type Interface blueprints
interface FormDetails {
  name: string
  email: string
  message: string
}

interface StatusFeedback {
  success?: boolean
  message?: string
}

// Local Component State management
const formDetails = reactive<FormDetails>({
  name: '',
  email: '',
  message: '',
})

const buttonText = ref('Send')
const status = ref<StatusFeedback>({})
const statusVisible = ref(false)

// Tracking our auto-dismiss timer natively without an explicit useRef construct
let timeoutId: ReturnType<typeof setTimeout> | null = null

// Lifecycle Hook: Clear out memory pipelines if component unmounts mid-transit
onUnmounted(() => {
  if (timeoutId) clearTimeout(timeoutId)
})

// Simulated API Email Pipeline
const sendEmail = async (): Promise<{ success: boolean }> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const success = Math.random() > 0.3
      resolve({ success })
    }, 1000)
  })
}

// Form Submission Handling Lifecycle
const handleSubmit = async () => {
  buttonText.value = 'Sending...'

  // Clear running background timers gracefully if active
  if (timeoutId) {
    clearTimeout(timeoutId)
    timeoutId = null
  }

  try {
    const result = await sendEmail()
    buttonText.value = 'Send'

    if (result && result.success) {
      status.value = { success: true, message: 'Message sent successfully!' }
      // Clean form inputs
      formDetails.name = ''
      formDetails.email = ''
      formDetails.message = ''
    } else {
      status.value = {
        success: false,
        message: 'Something went wrong, please try again later.',
      }
    }
  } catch {
    buttonText.value = 'Send'
    status.value = {
      success: false,
      message: 'Server error. Please try again later.',
    }
  }

  statusVisible.value = true

  // Handle auto-dismissal after 5 seconds tracking
  timeoutId = setTimeout(() => {
    statusVisible.value = false
  }, 5000)
}
</script>
