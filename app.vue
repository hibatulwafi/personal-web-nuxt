<template>
  <div class="flex h-screen bg-vscodebg text-white overflow-x-hidden">
    <!-- Sidebar -->
    <Sidebar :tabs="tabs" :activeTab="activeTab" :isOpen="sidebarOpen" @changeTab="changeTab"
      @update:isOpen="sidebarOpen = $event" />

    <!-- Konten -->
    <div class="flex-1 flex flex-col w-full">
      <!-- Topbar (toggle tombol untuk mobile) -->
      <div class="md:hidden bg-sidebar p-2 flex items-center gap-2 z-50 relative">
        <button @click="sidebarOpen = !sidebarOpen" class="text-white">
          <FontAwesomeIcon :icon="['fas', 'bars']" class="w-5 h-5" />
        </button>
        <span class="text-sm font-semibold">hiwapiputra</span>
      </div>

      <!-- TabBar -->
      <TabBar :tabs="tabs" :activeTab="activeTab" @changeTab="changeTab" />

      <!-- Konten tab -->
      <main class="flex-1 overflow-auto scrollbar scrollbar-thumb-gray-600 scrollbar-track-transparent p-4">
        <component :is="activeTab.component" />
      </main>
    </div>
  </div>
</template>


<script setup>
import { ref } from 'vue'
import Sidebar from './components/Sidebar.vue'
import TabBar from './components/TabBar.vue'
import Profile from './components/tabs/Profile.vue'
import Education from './components/tabs/Education.vue'
import Portfolio from './components/tabs/Portfolio.vue'
import WorkExperience from './components/tabs/WorkExperience.vue'
import Skill from './components/tabs/Skill.vue'

const tabs = [
  { name: 'profile.vue', icon: 'fa-brands fa-vuejs', component: Profile },
  { name: 'education.json', icon: 'fa-solid fa-file-code', component: Education },
  { name: 'experience.js', icon: 'fa-brands fa-js', component: WorkExperience },
  { name: 'skills.py', icon: 'fa-brands fa-python', component: Skill },
  { name: 'portfolio.css', icon: 'fa-brands fa-css3-alt', component: Portfolio }
]

const activeTab = ref(tabs[0])
const sidebarOpen = ref(false)
const changeTab = (tab) => (activeTab.value = tab)
</script>
