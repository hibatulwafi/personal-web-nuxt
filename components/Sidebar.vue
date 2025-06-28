<template>
  <transition name="slide">
    <aside v-show="isOpen || isDesktop"
      class="bg-sidebar text-white w-48 h-screen fixed md:relative top-0 left-0 z-40 md:z-0 p-3">
      <!-- Label explorer -->
      <div class="flex items-center gap-2 text-xs text-gray-400 mb-2 mt-10 md:mt-0">
        <FontAwesomeIcon icon="fa-solid fa-folder-open" />
        <span>EXPLORER</span>
      </div>

      <!-- Tab items -->
      <div v-for="tab in tabs" :key="tab.name" :class="[
        'cursor-pointer px-2 py-1 rounded flex items-center gap-2 text-sm',
        tab.name === activeTab.name ? 'bg-tabactive text-white' : 'hover:bg-tabbg'
      ]" @click="$emit('changeTab', tab); if (!isDesktop) $emit('update:isOpen', false)">
        <FontAwesomeIcon :icon="tab.icon.split(' ')" class="w-4 h-4" />
        {{ tab.name }}
      </div>
    </aside>
  </transition>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const props = defineProps(['tabs', 'activeTab', 'isOpen'])
const emit = defineEmits(['changeTab', 'update:isOpen'])

const isDesktop = ref(false)

const updateIsDesktop = () => {
  isDesktop.value = window.innerWidth >= 768
}

onMounted(() => {
  updateIsDesktop()
  window.addEventListener('resize', updateIsDesktop)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', updateIsDesktop)
})
</script>

<style scoped>
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.3s ease;
}

.slide-enter-from {
  transform: translateX(-100%);
}

.slide-leave-to {
  transform: translateX(-100%);
}
</style>
