<template>
  <nav :class="['navbar', { scrolled }]">
    <div class="container flex items-center justify-between px-10 py-3">
      <!-- Logo -->
      <a class="navbar-brand" href="#">
        <img :src="myLogo" alt="Logo" class="w-10 transition-transform duration-300 hover:scale-110" />
      </a>

      <!-- Desktop Navigation Links (visible on lg+) -->
      <ul class="hidden lg:flex items-center gap-2 m-0 p-0 list-none">
        <li class="nav-item">
          <a
            href="#home"
            class="navbar-link"
            :class="{ active: activeLink === 'home' }"
            @click.prevent="setActive('home')"
          >Home</a>
        </li>
        <li class="nav-item">
          <a
            href="#skills"
            class="navbar-link"
            :class="{ active: activeLink === 'skills' }"
            @click.prevent="setActive('skills')"
          >Skills</a>
        </li>
        <li class="nav-item">
          <a
            href="#projects"
            class="navbar-link"
            :class="{ active: activeLink === 'projects' }"
            @click.prevent="setActive('projects')"
          >Projects</a>
        </li>
      </ul>

      <!-- Right side: Social + Button (desktop) + Hamburger (mobile) -->
      <div class="flex items-center gap-4">
        <!-- Desktop social + button (hidden on mobile) -->
        <div class="hidden lg:flex items-center gap-4">
          <!-- Social Icons (with custom CSS for hover circle) -->
          <div class="social-icon flex gap-2">
            <a href="https://github.com/Torettosaviour17" target="_blank" rel="noopener noreferrer" class="social-icon-link">
              <span class="icon github">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                </svg>
              </span>
            </a>
            <a href="https://www.linkedin.com/in/saviour-chidubem-devsaviour/" target="_blank" rel="noopener noreferrer" class="social-icon-link">
              <span class="icon linkedin">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                </svg>
              </span>
            </a>
            <a href="https://wa.me/2348029803899" target="_blank" rel="noopener noreferrer" class="social-icon-link">
              <span class="icon whatsapp">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.644-.182-.065-.315-.099-.445.099-.133.197-.513.644-.628.775-.114.133-.232.148-.43.05-.197-.1-.834-.308-1.59-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.38-.323-.319-.445-.319-.114 0-.247-.014-.38-.014a.73.73 0 0 0-.525.247c-.18.198-.693.677-.693 1.654 0 .977.71 1.92.81 2.052.099.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.166-.464.166-.862.116-.944-.05-.082-.183-.133-.38-.232z"/>
                </svg>
              </span>
            </a>
          </div>

          <!-- Let's Connect Button (pure Tailwind) -->
          <a href="#connect" class="inline-block">
            <button class="btn-slide font-bold text-white border border-white px-4 py-2 text-lg relative overflow-hidden transition-colors duration-300 hover:text-black hover:bg-white">
              <span class="relative z-10">Let’s Connect</span>
            </button>
          </a>
        </div>

        <!-- Hamburger Toggle (visible on mobile only) -->
        <div class="lg:hidden text-white text-2xl cursor-pointer z-50" @click="toggleMenu">
          <Bars3Icon v-if="!isMenuOpen" class="w-6 h-6" />
          <XMarkIcon v-else class="w-6 h-6" />
        </div>
      </div>
    </div>

    <!-- Mobile Menu Fullscreen Overlay -->
    <div
      v-if="isMenuOpen"
      class="fixed top-0 left-0 w-full h-full bg-black z-40 flex flex-col justify-center items-center space-y-6 overflow-x-hidden transition-all duration-300"
    >
      <a
        href="#home"
        class="text-white text-xl"
        :class="{ 'font-bold': activeLink === 'home' }"
        @click.prevent="setActive('home')"
      >Home</a>
      <a
        href="#skills"
        class="text-white text-xl"
        :class="{ 'font-bold': activeLink === 'skills' }"
        @click.prevent="setActive('skills')"
      >Skills</a>
      <a
        href="#projects"
        class="text-white text-xl"
        :class="{ 'font-bold': activeLink === 'projects' }"
        @click.prevent="setActive('projects')"
      >Projects</a>
      <a
        href="#connect"
        class="text-white text-xl"
        :class="{ 'font-bold': activeLink === 'connect' }"
        @click.prevent="setActive('connect')"
      >Let’s Connect</a>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'
import myLogo from '@/assets/my-logo.png'

const scrolled = ref(false)
const activeLink = ref('home')
const isMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const setActive = (link: string) => {
  activeLink.value = link
  isMenuOpen.value = false
  const element = document.getElementById(link)
  if (element) element.scrollIntoView({ behavior: 'smooth' })
}

const handleScroll = () => {
  scrolled.value = window.scrollY > 50
}

const updateActiveOnScroll = () => {
  const scrollPos = window.scrollY + 100
  const sections = ['home', 'skills', 'projects', 'connect']
  for (const section of sections) {
    const el = document.getElementById(section)
    if (el) {
      const { offsetTop, offsetHeight } = el
      if (scrollPos >= offsetTop && scrollPos < offsetTop + offsetHeight) {
        activeLink.value = section
        break
      }
    }
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  window.addEventListener('scroll', updateActiveOnScroll)
  updateActiveOnScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  window.removeEventListener('scroll', updateActiveOnScroll)
})
</script>

<style scoped>
/* ---------- Navbar base styles (position, background, etc.) ---------- */
nav.navbar {
  padding: 18px 0;
  position: fixed;
  width: 100%;
  top: 0;
  display: flex;
  overflow-x: hidden;
  z-index: 9999;
  transition: 0.32s ease-in-out;
}
nav.navbar.scrolled {
  padding: 0px 0;
  background-color: #0c0b0b;
}
nav.navbar .navbar-brand img {
  transition: transform 0.3s ease-in-out;
}
nav.navbar .navbar-brand img:hover {
  transform: scale(1.7);
}
.navbar-link {
  font-weight: 400;
  color: #fff !important;
  letter-spacing: 0.8px;
  padding: 0 25px;
  font-size: 18px;
  opacity: 0.75;
  text-decoration: none;
}
.navbar-link:hover,
.navbar-link.active {
  opacity: 1;
}

/* ---------- Social icons (custom CSS for the ::before hover circle) ---------- */
.social-icon {
  display: inline-block;
}
.social-icon .social-icon-link {
  width: 42px;
  height: 42px;
  background: rgba(217, 217, 217, 0.1);
  display: inline-flex;
  border-radius: 50%;
  margin-right: 6px;
  align-items: center;
  justify-content: center;
  line-height: 1;
  border: 1px solid rgba(255, 255, 255, 0.5);
  position: relative;
  overflow: hidden;
}
.social-icon .social-icon-link::before {
  content: '';
  width: 42px;
  height: 42px;
  position: absolute;
  background-color: #ffffff;
  border-radius: 50%;
  transform: scale(0);
  transition: 0.3s ease-in-out;
  z-index: 0;
}
.social-icon .social-icon-link:hover::before {
  transform: scale(1);
}
.social-icon .icon {
  z-index: 1;
  font-size: 20px;
  transition: color 0.3s ease-in-out;
}
.social-icon .github { color: #fff; }
.social-icon .linkedin { color: #0a66c2; }
.social-icon .whatsapp { color: #25d366; }
.social-icon .social-icon-link:hover .github { color: #000; }
.social-icon .social-icon-link:hover .linkedin { color: #084d94; }
.social-icon .social-icon-link:hover .whatsapp { color: #1da851; }

.btn-slide {
  font-weight: 700;
  color: #fff;
  border: 1px solid #fff;
  padding: 18px 34px;
  font-size: 18px;
  margin-left: 18px;
  position: relative;
  background-color: transparent;
  transition: 0.3s ease-in-out;
}
.btn-slide span {
  z-index: 1;
}
.btn-slide::before {
  content: "";
  width: 0%;
  height: 100%;
  position: absolute;
  background-color: #fff;
  left: 0;
  top: 0;
  z-index: -1;
  transition: 0.3s ease-in-out;
}
.btn-slide:hover {
  color: #121212;
}
button:hover span {
  color: #121212 !important;
}
.btn-slide:hover::before {
  width: 100%;
  
}

/* Responsive adjustments */
@media (max-width: 991.98px) {
  nav.navbar .navbar-collapse {
    background-color: #0c0b0b;
    padding: 1rem 1.5rem;
  }
}
</style>