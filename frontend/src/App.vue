<template>
  <div class="min-h-screen bg-gray-900 flex items-center justify-center p-4">
    <!-- Mobile Viewport Wrapper -->
    <div class="w-full max-w-[430px] h-screen max-h-[932px] bg-white rounded-3xl shadow-2xl overflow-hidden relative">
      <!-- Optional: Phone notch decoration (iPhone style) -->
      <div class="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-7 bg-black rounded-b-3xl z-50 flex items-center justify-center">
        <div class="w-16 h-1.5 bg-gray-800 rounded-full"></div>
      </div>
      
      <!-- App Content -->
      <RouterView />
    </div>
  </div>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router';
</script>
