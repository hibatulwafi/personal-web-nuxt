<script setup>
import { useViewModeStore } from '@/stores/viewMode'

const viewMode = useViewModeStore()
const lines = Array.from({ length: 40 })

const viewData = [
  {
    role: 'Full Stack Developer',
    company: 'PT. Vita Shopindo',
    years: '2024 - Present',
    highlights: [
      'Built APIs for syncing 25+ stores',
      'ERP dashboard for ops',
      'Created HRIS system',
    ]
  },
  {
    role: 'Senior Full Stack Developer',
    company: 'PT. Merry Riana Group',
    years: '2021 - 2024',
    highlights: [
      'Managed HR & Accounting',
      'Built PWA with Ionic',
      'Designed APIs with JWT',
    ]
  },
  {
    role: 'Assistant Lecturer',
    company: 'Politeknik Sukabumi',
    years: '2020 – 2021',
    highlights: [
      'Prepared syllabi and assignments',
      'Assisted programming, database, networking classes'
    ]
  },
  {
    role: 'Honorary Teacher Support',
    company: 'IT AL-Fath Vocational High School Sukabumi',
    years: '2018',
    highlights: [
      'Taught website programming & assessments',
      'Created programming lesson materials'
    ]
  }
]

// Daftar warna untuk variasi card
const colorMap = [
  { bg: 'bg-gray-800', border: 'border-blue-500', text: 'text-blue-400' },
  { bg: 'bg-gray-800', border: 'border-green-500', text: 'text-green-400' },
  { bg: 'bg-gray-800', border: 'border-purple-500', text: 'text-purple-400' },
  { bg: 'bg-gray-800', border: 'border-pink-500', text: 'text-pink-400' }
]

</script>

<template>
  <div class="text-white font-mono text-sm ">
    <!-- 🔘 Toggle View Mode -->
    <div class="fixed  right-4 z-50">
      <ToggleViewMode />
    </div>

    <!-- 💻 Developer Mode -->
    <div v-if="viewMode.mode === 'dev'" class="flex">
      <!-- Baris Nomor -->
      <div class="pr-4 text-right text-gray-500 select-none leading-relaxed">
        <div v-for="(_, index) in lines" :key="index">
          {{ (index + 1).toString().padStart(2, '0') }}
        </div>
      </div>

      <!-- Konten Kode -->
      <pre class="leading-relaxed text-sm text-white">
<span class="text-yellow-400">const</span> experience = [
  {
    <span class="text-teal-400">role</span>: <span class="text-yellow-400">"Full Stack Developer"</span>,
    <span class="text-teal-400">company</span>: <span class="text-yellow-400">"PT. Vita Shopindo"</span>,
    <span class="text-teal-400">years</span>: <span class="text-yellow-400">"2024 - Present"</span>,
    <span class="text-teal-400">highlights</span>: [
      <span class="text-gray-300">"Built APIs for 25+ stores"</span>,
      <span class="text-gray-300">"ERP dashboard for ops"</span>,
      <span class="text-gray-300">"Created HRIS system"</span>
    ]
  },
  {
    <span class="text-teal-400">role</span>: <span class="text-yellow-400">"Senior Full Stack Developer"</span>,
    <span class="text-teal-400">company</span>: <span class="text-yellow-400">"PT. Merry Riana Group"</span>,
    <span class="text-teal-400">years</span>: <span class="text-yellow-400">"2021 - 2024"</span>,
    <span class="text-teal-400">highlights</span>: [
      <span class="text-gray-300">"Managed HR & Accounting"</span>,
      <span class="text-gray-300">"Built PWA with Ionic"</span>,
      <span class="text-gray-300">"Designed APIs with JWT"</span>
    ]
  },
  {
    <span class="text-teal-400">role</span>: <span class="text-yellow-400">"Assistant Lecturer"</span>,
    <span class="text-teal-400">company</span>: <span class="text-yellow-400">"Politeknik Sukabumi"</span>,
    <span class="text-teal-400">years</span>: <span class="text-yellow-400">"2020 – 2021"</span>,
    <span class="text-teal-400">highlights</span>: [
      <span class="text-gray-300">"Prepared syllabi and assignments"</span>,
      <span class="text-gray-300">"Assisted programming, database, networking classes"</span>
    ]
  },
  {
    <span class="text-teal-400">role</span>: <span class="text-yellow-400">"Honorary Teacher Support"</span>,
    <span class="text-teal-400">company</span>: <span class="text-yellow-400">"IT AL-Fath Vocational High School Sukabumi"</span>,
    <span class="text-teal-400">years</span>: <span class="text-yellow-400">"2018"</span>,
    <span class="text-teal-400">highlights</span>: [
      <span class="text-gray-300">"Taught website programming & assessments"</span>,
      <span class="text-gray-300">"Created programming lesson materials"</span>
    ]
  }
];
</pre>
    </div>

    <!-- 👤 View Mode -->
    <div v-else class="space-y-6">
      <div v-for="(exp, i) in viewData" :key="exp.company" :class="[
        'p-4 rounded shadow-md hover:shadow-lg transition border-l-4',
        colorMap[i % colorMap.length].bg,
        colorMap[i % colorMap.length].border
      ]">
        <h3 :class="['text-lg font-bold flex items-center gap-2', colorMap[i % colorMap.length].text]">
          <FontAwesomeIcon icon="fa-solid fa-briefcase" class="w-4" />
          {{ exp.role }}
        </h3>
        <div class="text-sm text-gray-400 mb-2 italic">
          <FontAwesomeIcon icon="fa-solid fa-building" class="mr-1" />
          {{ exp.company }}
          <span class="mx-2">•</span>
          {{ exp.years }}
        </div>
        <ul class="list-disc list-inside text-gray-300 space-y-1">
          <li v-for="point in exp.highlights" :key="point" class="hover:text-white transition">
            {{ point }}
          </li>
        </ul>
      </div>

    </div>
  </div>
</template>
