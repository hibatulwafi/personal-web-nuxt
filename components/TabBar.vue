<template>
  <div class="bg-tabbg border-b border-gray-700 w-full overflow-x-auto whitespace-nowrap scrollbar-hide">
    <div class="inline-flex text-tabtext text-sm">
      <div v-for="tab in tabs" :key="tab.name" :class="[
        'px-4 py-2 cursor-pointer flex items-center gap-2 pr-8 relative group',
        tab.name === activeTab.name ? 'bg-tabactive text-white' : 'hover:bg-sidebar'
      ]" @click="$emit('changeTab', tab)">
        <FontAwesomeIcon :icon="tab.icon.split(' ')" class="w-4 h-4" />
        {{ tab.name }}
        <FontAwesomeIcon icon="fa-solid fa-xmark"
          class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 opacity-0 group-hover:text-white group-hover:opacity-40 transition text-xs" />
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps(['tabs', 'activeTab'])
defineEmits(['changeTab'])
</script>

<style scoped>
.tab-active {
  @apply bg-tabactive text-white;
}
</style>