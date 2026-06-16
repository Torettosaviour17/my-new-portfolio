<template>
  <section
    class="relative py-16 md:py-24 px-4 bg-gradient-to-r from-[#aa367c] to-[#4a2fbd] overflow-hidden"
    id="connect"
  >
    <div class="max-w-7xl mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div
          ref="imgRef"
          class="flex items-center justify-center transition-all duration-1000 ease-out transform scale-75 opacity-0"
          :class="{ 'scale-100 opacity-100': isImgVisible }"
        >
          <img
            :src="contactImg"
            alt="Contact Us"
            class="w-full max-w-2xl h-auto object-contain drop-shadow-2xl"
          />
        </div>

        <div
          ref="formRef"
          class="transition-all duration-700 ease-out transform translate-y-6 opacity-0"
          :class="{ 'translate-y-0 opacity-100': isFormVisible }"
        >
          <h2 class="text-4xl md:text-5xl font-bold text-white mb-8 tracking-tight">
            Get In Touch
          </h2>

          <form @submit.prevent="handleSubmit" class="space-y-4">
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <input
                  v-model="formDetails.firstName"
                  type="text"
                  placeholder="First Name"
                  class="w-full bg-white/10 text-black border border-white/50 rounded-2xl placeholder:text-white/70 px-6 py-3 text-lg font-medium focus:bg-white focus:text-black focus:placeholder:text-[#121212]/60 outline-none transition-all duration-300"
                  required
                />
              </div>
              <div>
                <input
                  v-model="formDetails.lastName"
                  type="text"
                  placeholder="Last Name"
                  class="w-full bg-white/10 border border-white/50 rounded-2xl text-black placeholder:text-white/70 px-6 py-3 text-lg font-medium focus:bg-white focus:text-[#121212] focus:placeholder:text-[#121212]/60 outline-none transition-all duration-300"
                  required
                />
              </div>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <input
                  v-model="formDetails.email"
                  type="email"
                  placeholder="Email Address"
                  class="w-full bg-white/10 border border-white/50 rounded-2xl text-black placeholder:text-white/70 px-6 py-3 text-lg font-medium focus:bg-white focus:text-[#121212] focus:placeholder:text-[#121212]/60 outline-none transition-all duration-300"
                  required
                />
              </div>
              <div>
                <input
                  v-model="formDetails.phone"
                  type="tel"
                  placeholder="Phone No."
                  inputmode="numeric"
                  pattern="[0-9]*"
                  class="w-full bg-white/10 border border-white/50 rounded-2xl text-black placeholder:text-white/70 px-6 py-3 text-lg font-medium focus:bg-white focus:text-[#121212] focus:placeholder:text-[#121212]/60 outline-none transition-all duration-300"
                  required
                  @input="handlePhoneInput"
                />
              </div>
            </div>

            <div>
              <textarea
                v-model="formDetails.message"
                rows="6"
                placeholder="Message"
                class="w-full bg-white/10 border border-white/50 rounded-2xl text-black placeholder:text-white/70 px-6 py-3 text-lg font-medium focus:bg-white focus:text-[#121212] focus:placeholder:text-[#121212]/60 outline-none transition-all duration-300 resize-none"
                required
              ></textarea>
            </div>

            <div class="pt-2">
              <button
                type="submit"
                class="relative overflow-hidden group bg-white text-black font-bold px-12 py-3.5 text-lg transition-colors duration-300 ease-in-out"
              >
                <span
                  class="absolute inset-0 w-0 h-full bg-[#121212] transition-all duration-300 ease-in-out group-hover:w-full z-0"
                ></span>
                <span class="relative z-10 group-hover:text-white transition-colors duration-300">
                  {{ buttonText }}
                </span>
              </button>
            </div>

            <div v-if="status.message" class="mt-4 transition-all duration-300">
              <p
                :class="[
                  'text-lg font-semibold tracking-wide px-2',
                  status.success === false ? 'text-red-400 font-bold' : 'text-emerald-300',
                ]"
              >
                {{ status.message }}
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, reactive, watch } from 'vue'
import { useIntersectionObserver } from '@vueuse/core'
import contactImg from '/contact-img.svg'
import sendEmail from './email.ts'

// TypeScript Type Blueprints
interface FormFields {
  firstName: string
  lastName: string
  email: string
  phone: string
  message: string
}

interface StatusFeedback {
  success?: boolean
  message?: string
}

// Check LocalStorage cache on component mount
const savedForm = localStorage.getItem('contactForm')
const formInitialDetails: FormFields = savedForm
  ? JSON.parse(savedForm)
  : { firstName: '', lastName: '', email: '', phone: '', message: '' }

// State Elements
const formDetails = reactive<FormFields>({ ...formInitialDetails })
const buttonText = ref('Send')
const status = ref<StatusFeedback>({})

// Observers Layout Hooks
const imgRef = ref<HTMLElement | null>(null)
const formRef = ref<HTMLElement | null>(null)
const isImgVisible = ref(false)
const isFormVisible = ref(false)

useIntersectionObserver(
  imgRef,
  (entries) => {
    if (entries[0]?.isIntersecting) isImgVisible.value = true
  },
  { threshold: 0.1 },
)

useIntersectionObserver(
  formRef,
  (entries) => {
    if (entries[0]?.isIntersecting) isFormVisible.value = true
  },
  { threshold: 0.1 },
)

// Caching logic
const saveToLocalStorage = () => {
  localStorage.setItem('contactForm', JSON.stringify(formDetails))
}

// Safely watch all changes across text field updates to sync LocalStorage automatically
watch(
  () => formDetails,
  () => {
    saveToLocalStorage()
  },
  { deep: true },
)

const handlePhoneInput = (e: Event) => {
  const target = e.target as HTMLInputElement
  formDetails.phone = target.value.replace(/[^0-9]/g, '')
}

// Form Submission handling block
const handleSubmit = async () => {
  buttonText.value = 'Sending...'

  try {
    const result = await sendEmail({ ...formDetails })
    status.value = result
    buttonText.value = 'Send'

    if (result.success) {
      formDetails.firstName = ''
      formDetails.lastName = ''
      formDetails.email = ''
      formDetails.phone = ''
      formDetails.message = ''
      localStorage.removeItem('contactForm')
    }
  } catch {
    buttonText.value = 'Send'
    status.value = { success: false, message: 'Something went wrong. Please try again.' }
  }

  setTimeout(() => {
    status.value = {}
  }, 5000)
}
</script>
