<script setup>
import { useViewModeStore } from '@/stores/viewMode'
import ToggleViewMode from '@/components/ToggleViewMode.vue'

const viewMode = useViewModeStore()
const lines = Array.from({ length: 30 })
</script>

<template>
  <div class="relative text-sm font-mono text-white">

    <!-- 🔘 Toggle View Mode -->
    <div class="fixed  right-4 z-50">
      <ToggleViewMode />
    </div>

    <!-- 👨‍💻 Dev Mode -->
    <div v-if="viewMode.mode === 'dev'" class="flex">
      <!-- Baris Nomor -->
      <div class="pr-4 text-right text-gray-500 select-none leading-relaxed">
        <div v-for="(_, index) in lines" :key="index">
          {{ (index + 1).toString().padStart(2, '0') }}
        </div>
      </div>

      <!-- JSON Konten -->
      <pre class="leading-relaxed text-sm">
<span class="text-white">{</span>
  <span class="text-teal-400">"formalEducation"</span>: [
    {
      <span class="text-teal-400">"institution"</span>: <span class="text-yellow-400">"Politeknik Sukabumi"</span>,
      <span class="text-teal-400">"program"</span>: <span class="text-yellow-400">"Bachelor of Computer Engineering"</span>,
      <span class="text-teal-400">"year"</span>: <span class="text-yellow-400">"2017 - 2020"</span>,
      <span class="text-teal-400">"gpa"</span>: <span class="text-rose-400">3.87</span>
    }
  ],
  <span class="text-teal-400">"informalEducation"</span>: [
    {
      <span class="text-teal-400">"provider"</span>: <span class="text-yellow-400">"Dicoding"</span>,
      <span class="text-teal-400">"course"</span>: <span class="text-yellow-400">"Belajar Webdesign"</span>,
      <span class="text-teal-400">"year"</span>: <span class="text-rose-400">2018</span>
    },
    {
      <span class="text-teal-400">"provider"</span>: <span class="text-yellow-400">"RevoU"</span>,
      <span class="text-teal-400">"course"</span>: <span class="text-yellow-400">"Fullstack Developer"</span>,
      <span class="text-teal-400">"year"</span>: <span class="text-gray-400">null</span>
    }
  ]
<span class="text-white">}</span>
      </pre>
    </div>

    <!-- 👀 View Mode -->
    <div v-else class="text-left space-y-4 leading-relaxed px-2">
      <h2 class="text-lg font-semibold text-teal-400">Formal Education</h2>
      <div class="pl-4 border-l-2 border-teal-400">
        <p class="text-white font-semibold">Politeknik Sukabumi</p>
        <p class="text-gray-400">Bachelor of Computer Engineering</p>
        <p class="text-gray-500">2017 – 2020 | GPA: <span class="text-rose-400">3.87</span></p>
      </div>

      <h2 class="text-lg font-semibold text-blue-400">Informal Education</h2>
      <div class="pl-4 border-l-2 border-blue-400">
        <p class="text-white font-semibold">Dicoding</p>
        <p class="text-gray-400">Belajar Webdesign (2018)</p>
      </div>
      <div class="pl-4 border-l-2 border-blue-400">
        <p class="text-white font-semibold">RevoU</p>
        <p class="text-gray-400">Fullstack Developer</p>
      </div>
    </div>
  </div>
</template>