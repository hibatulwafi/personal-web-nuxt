<script setup>
import { ref } from 'vue'
import { useViewModeStore } from '@/stores/viewMode'
const viewMode = useViewModeStore()

const projects = [
  {
    title: 'Mobile Apps',
    description: 'Cross-platform app using Ionic & Angular',
    role: 'Mobile App Developer',
    stack: ['Ionic', 'Angular', 'MySQL'],
    link: '#',
    image: 'https://placehold.co/600x300.png?text=Mobile+App'
  },
  {
    title: 'Web Apps',
    description: 'Internal systems for HR, finance, leave, etc.',
    role: 'Fullstack Developer',
    stack: ['CodeIgniter', 'HTML', 'CSS', 'JS'],
    link: null,
    image: 'https://placehold.co/600x300.png?text=Web+Apps'
  },
  {
    title: 'Company Profile Websites',
    description: 'Profile websites for product & service showcase',
    role: 'Frontend Developer',
    stack: ['HTML', 'CSS', 'JS', 'Bootstrap'],
    link: 'https://shinehoneytomat.com',
    image: 'https://placehold.co/600x300.png?text=Company+Profile'
  },
  {
    title: 'Landing Pages',
    description: 'Landing pages with payment gateway integration',
    role: 'Frontend & Backend Developer',
    stack: ['CodeIgniter', 'JS', 'Xendit'],
    link: 'https://inspirafest.id',
    image: 'https://placehold.co/600x300.png?text=Landing+Page'
  },
  {
    title: 'Open Data Sukabumi',
    description: 'Public open data dashboard for the city',
    role: 'Lead Developer',
    stack: ['Laravel', 'Bootstrap', 'JS'],
    link: 'https://opendata.sukabumikota.go.id',
    image: 'https://placehold.co/600x300.png?text=Open+Data'
  }
]
</script>


<template>
  <div class="text-white font-mono text-sm space-y-4">
    <!-- 🔘 Tombol Mode -->
    <div class="fixed  right-4 z-50">
      <ToggleViewMode />
    </div>

    <!-- 👨‍💻 Dev Mode -->
    <div v-if="viewMode.mode === 'dev'" class="flex">
      <div class="pr-4 text-right text-gray-500 select-none leading-relaxed">
        <div v-for="line in 30" :key="line">{{ line.toString().padStart(2, '0') }}</div>
      </div>
      <pre class="leading-relaxed text-sm">
<span class="text-pink-400">/* Portfolio CSS */</span>

<span class="text-green-400">.github</span> {
  link: <span class="text-yellow-300">"github.com/hibatulwafi"</span>;
}

<span class="text-green-400">.mobile-app</span> {
  description: <span class="text-yellow-300">"Cross-platform app using Ionic & Angular"</span>;
  role: <span class="text-yellow-300">"Mobile Developer"</span>;
  stack: [<span class="text-blue-300">"Ionic"</span>, <span class="text-blue-300">"Angular"</span>, <span class="text-blue-300">"MySQL"</span>];
}

<span class="text-green-400">.web-app</span> {
  description: <span class="text-yellow-300">"Internal company system (attendance, finance)"</span>;
  role: <span class="text-yellow-300">"Fullstack Developer"</span>;
  stack: [<span class="text-blue-300">"CodeIgniter"</span>, <span class="text-blue-300">"HTML"</span>, <span class="text-blue-300">"JS"</span>];
}

<span class="text-green-400">.company-profile</span> {
  sites: [<span class="text-yellow-300">"shinehoneytomat.com"</span>, <span class="text-yellow-300">"merryriana.com"</span>];
  role: <span class="text-yellow-300">"Frontend Developer"</span>;
  stack: [<span class="text-blue-300">"HTML"</span>, <span class="text-blue-300">"CSS"</span>, <span class="text-blue-300">"JS"</span>];
}

<span class="text-green-400">.landing-page</span> {
  link: <span class="text-yellow-300">"inspirafest.id"</span>;
  feature: <span class="text-yellow-300">"Payment gateway integration"</span>;
}

<span class="text-green-400">.open-data</span> {
  link: <span class="text-yellow-300">"opendata.sukabumikota.go.id"</span>;
  tech: [<span class="text-blue-300">"Laravel"</span>, <span class="text-blue-300">"Bootstrap"</span>];
}
      </pre>
    </div>

    <!-- 👤 View Mode -->
    <div v-else class="grid md:grid-cols-2 gap-4">
      <div v-for="item in projects" :key="item.title"
        class="bg-[#1e1e1e] rounded-xl overflow-hidden shadow-md border border-gray-700">
        <img :src="item.image" alt="Project Screenshot" class="w-full h-40 object-cover">
        <div class="p-4 space-y-2">
          <h3 class="text-white text-base font-semibold">{{ item.title }}</h3>
          <p class="text-gray-400 text-sm">{{ item.description }}</p>
          <p class="text-gray-500 text-xs"><span class="font-semibold">Role:</span> {{ item.role }}</p>
          <p class="text-gray-500 text-xs"><span class="font-semibold">Tech Stack:</span> {{ item.stack.join(', ') }}
          </p>
          <div class="flex gap-2 mt-2">
            <a v-if="item.link" :href="item.link" target="_blank"
              class="bg-blue-600 hover:bg-blue-700 text-white text-xs px-3 py-1 rounded">View</a>
            <a v-if="item.download" :href="item.download" download
              class="bg-gray-700 hover:bg-gray-600 text-white text-xs px-3 py-1 rounded">Download</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>