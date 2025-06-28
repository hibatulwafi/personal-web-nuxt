<script setup>
import { ref } from 'vue'
import { useViewModeStore } from '@/stores/viewMode'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {
  faHtml5, faCss3Alt, faJava, faPhp, faJs, faVuejs,
  faReact, faLaravel, faNode, faPython
} from '@fortawesome/free-brands-svg-icons'

import { faDatabase, faCode, faTerminal } from '@fortawesome/free-solid-svg-icons'

const viewMode = useViewModeStore()
const skills = [
  {
    label: 'Programming Languages',
    items: [
      { name: 'HTML', icon: faHtml5, color: 'bg-orange-500 text-white' },
      { name: 'CSS', icon: faCss3Alt, color: 'bg-blue-500 text-white' },
      { name: 'Java', icon: faJava, color: 'bg-red-600 text-white' },
      { name: 'PHP', icon: faPhp, color: 'bg-indigo-500 text-white' },
      { name: 'jQuery', icon: faJs, color: 'bg-blue-400 text-white' },
      { name: 'Visual Basic', icon: faTerminal, color: 'bg-purple-600 text-white' },
      { name: 'TypeScript', icon: faJs, color: 'bg-blue-700 text-white' }
    ]
  },
  {
    label: 'Frameworks',
    items: [
      { name: 'CodeIgniter', icon: faCode, color: 'bg-orange-600 text-white' },
      { name: 'Laravel', icon: faLaravel, color: 'bg-red-500 text-white' },
      { name: 'React', icon: faReact, color: 'bg-cyan-500 text-white' },
      { name: 'Ionic', icon: faJs, color: 'bg-indigo-400 text-white' },
      { name: 'Vue', icon: faVuejs, color: 'bg-green-500 text-white' },
      { name: 'Quasar', icon: faVuejs, color: 'bg-teal-500 text-white' }
    ]
  },
  {
    label: 'Databases',
    items: [
      { name: 'MySQL', icon: faDatabase, color: 'bg-yellow-500 text-black' },
      { name: 'PostgreSQL', icon: faDatabase, color: 'bg-blue-700 text-white' }
    ]
  },
  {
    label: 'Soft Skills',
    items: [
      { name: 'Analytical thinking', color: 'bg-pink-500 text-white' },
      { name: 'Communication', color: 'bg-yellow-500 text-black' },
      { name: 'Problem solving', color: 'bg-rose-600 text-white' },
      { name: 'Collaboration', color: 'bg-emerald-500 text-white' }
    ]
  }
]
</script>


<template>
  <div class="text-white font-mono text-sm space-y-4">
    <!-- 🔘 Tombol Mode -->
   <div class="fixed  right-4 z-50">
      <ToggleViewMode />
    </div>

    <!-- Developer Mode -->
    <div v-if="viewMode.mode === 'dev'" class="flex">
      <div class="pr-4 text-right text-gray-500 select-none leading-relaxed">
        <div v-for="line in 30" :key="line">{{ line.toString().padStart(2, '0') }}</div>
      </div>
      <pre class="leading-relaxed text-sm">
<span class="text-green-400"># skills.py</span>

<span class="text-yellow-400">programming_languages</span> = [
  <span class="text-pink-300">"HTML"</span>, <span class="text-pink-300">"CSS"</span>, <span class="text-pink-300">"Java"</span>,
  <span class="text-pink-300">"PHP"</span>, <span class="text-pink-300">"jQuery"</span>, <span class="text-pink-300">"Visual Basic"</span>,
  <span class="text-pink-300">"TypeScript"</span>
]

<span class="text-yellow-400">frameworks</span> = [
  <span class="text-pink-300">"CodeIgniter"</span>, <span class="text-pink-300">"Laravel"</span>,
  <span class="text-pink-300">"React"</span>, <span class="text-pink-300">"Ionic"</span>,
  <span class="text-pink-300">"Vue"</span>, <span class="text-pink-300">"Quasar"</span>
]

<span class="text-yellow-400">databases</span> = [<span class="text-pink-300">"MySQL"</span>, <span class="text-pink-300">"PostgreSQL"</span>]

<span class="text-yellow-400">soft_skills</span> = [
  <span class="text-pink-300">"Analytical thinking"</span>, <span class="text-pink-300">"Communication"</span>,
  <span class="text-pink-300">"Problem solving"</span>, <span class="text-pink-300">"Collaboration"</span>
]
      </pre>
    </div>

    <!-- 👤 View Mode -->
    <div v-else class="grid md:grid-cols-2 gap-6 text-sm">
      <div v-for="category in skills" :key="category.label"
        class="bg-[#1e1e1e] rounded-xl p-5 border border-gray-700 space-y-3 shadow transition hover:shadow-lg">
        <h3 class="text-white font-semibold text-base border-b border-gray-700 pb-1">{{ category.label }}</h3>
        <div class="flex flex-wrap gap-2">
          <div v-for="item in category.items" :key="item.name" :class="[
            'flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium shadow-sm transition',
            item.color || 'bg-gray-700 text-white'
          ]">
            <FontAwesomeIcon v-if="item.icon" :icon="item.icon" class="w-4 h-4" />
            <span>{{ item.name }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
