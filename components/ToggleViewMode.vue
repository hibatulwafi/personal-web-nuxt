<script setup>
import { useViewModeStore } from '@/stores/viewMode'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

const viewMode = useViewModeStore()
</script>

<template>
  <button @click="viewMode.toggleMode()"
    class="flex items-center gap-2 bg-gray-700 hover:bg-blue-600 transition-all duration-200 text-white text-xs px-3 py-1.5 rounded-full shadow-md min-w-[120px] text-start">
    <div class="bg-gray-900 w-6 h-6 rounded-full flex items-center justify-center transition relative"
      :class="viewMode.mode === 'dev' ? 'text-emerald-400' : 'text-yellow-400'">
      <Transition name="fade-scale" mode="out-in">
        <FontAwesomeIcon :icon="viewMode.mode === 'dev' ? ['fas', 'laptop-code'] : ['fas', 'desktop']" />
      </Transition>
    </div>
    <span class="whitespace-nowrap relative">
      <Transition name="fade-slide" mode="out-in">
        <span :key="viewMode.mode">
          {{ viewMode.mode === 'dev' ? 'Dev Mode' : 'View Mode' }}
        </span>
      </Transition>
    </span>
  </button>
</template>

<style>
.fade-scale-enter-active,
.fade-scale-leave-active {
  transition: all 0.25s ease-in-out;
}

.fade-scale-enter-from,
.fade-scale-leave-to {
  opacity: 0;
  transform: scale(0.7);
}

.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: all 0.25s ease-in-out;
}

.fade-slide-enter-from {
  opacity: 0;
  transform: translateX(-10px);
}

.fade-slide-leave-to {
  opacity: 0;
  transform: translateX(10px);
}
</style>