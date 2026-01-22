<template>
  <div class="min-h-screen flex flex-col">
    <!-- App Bar -->
    <header
      class="bg-white/80 backdrop-blur-md border-b border-gray-100 px-4 py-4 flex items-center gap-3 shrink-0"
    >
      <RouterLink
        to="/"
        class="w-9 h-9 flex items-center justify-center rounded-xl hover:bg-gray-100 transition-colors -ml-1"
      >
        <svg class="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M15 19l-7-7 7-7"></path>
        </svg>
      </RouterLink>
      <h1 class="text-lg font-extrabold text-gray-900 flex-1">Exercises</h1>
      <button
        class="w-9 h-9 bg-indigo-600 hover:bg-indigo-700 rounded-xl flex items-center justify-center transition-all active:scale-95"
      >
        <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M12 4v16m8-8H4" />
        </svg>
      </button>
    </header>

    <!-- Main Content Area (Scrollable) -->
    <main class="flex-1 overflow-y-auto hide-scrollbar px-5 py-6 bg-gray-50">
      <!-- Search Bar -->
      <div class="mb-6">
        <div class="relative">
          <input
            type="text"
            placeholder="Search exercises..."
            class="w-full pl-11 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-400 transition-all"
          />
          <svg
            class="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg>
        </div>
      </div>

      <!-- Strength Exercises -->
      <div class="mb-8">
        <h2 class="text-[11px] font-black text-gray-400 uppercase tracking-[0.15em] mb-3">
          Strength Training
        </h2>

        <div class="space-y-2">
          <!-- Exercise Item -->
          <div
            class="bg-white rounded-xl p-4 shadow-sm border border-gray-100 flex items-center gap-3 active:bg-gray-50 transition-colors"
          >
            <div class="w-12 h-12 bg-gray-100 rounded-xl border border-gray-200 flex items-center justify-center shrink-0">
              <svg class="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
              </svg>
            </div>
            <div class="flex-1 min-w-0">
              <h3 class="font-bold text-gray-900">Barbell Bench Press</h3>
              <p class="text-xs text-gray-500 font-semibold">Chest • Weight × Reps</p>
            </div>
          </div>

          <div
            class="bg-white rounded-xl p-4 shadow-sm border border-gray-100 flex items-center gap-3 active:bg-gray-50 transition-colors"
          >
            <div class="w-12 h-12 bg-gray-100 rounded-xl border border-gray-200 flex items-center justify-center shrink-0">
              <svg class="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
              </svg>
            </div>
            <div class="flex-1 min-w-0">
              <h3 class="font-bold text-gray-900">Barbell Back Squat</h3>
              <p class="text-xs text-gray-500 font-semibold">Legs • Weight × Reps</p>
            </div>
          </div>

          <div
            class="bg-white rounded-xl p-4 shadow-sm border border-gray-100 flex items-center gap-3 active:bg-gray-50 transition-colors"
          >
            <div class="w-12 h-12 bg-gray-100 rounded-xl border border-gray-200 flex items-center justify-center shrink-0">
              <svg class="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
              </svg>
            </div>
            <div class="flex-1 min-w-0">
              <h3 class="font-bold text-gray-900">Pull-ups</h3>
              <p class="text-xs text-gray-500 font-semibold">Back • Weight × Reps</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Cardio Exercises -->
      <div class="mb-8">
        <h2 class="text-[11px] font-black text-gray-400 uppercase tracking-[0.15em] mb-3">
          Cardio
        </h2>

        <div class="space-y-2">
          <div
            class="bg-white rounded-xl p-4 shadow-sm border border-gray-100 flex items-center gap-3 active:bg-gray-50 transition-colors"
          >
            <div class="w-12 h-12 bg-gray-100 rounded-xl border border-gray-200 flex items-center justify-center shrink-0">
              <svg class="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </div>
            <div class="flex-1 min-w-0">
              <h3 class="font-bold text-gray-900">Running</h3>
              <p class="text-xs text-gray-500 font-semibold">Cardio • Distance × Time</p>
            </div>
          </div>

          <div
            class="bg-white rounded-xl p-4 shadow-sm border border-gray-100 flex items-center gap-3 active:bg-gray-50 transition-colors"
          >
            <div class="w-12 h-12 bg-gray-100 rounded-xl border border-gray-200 flex items-center justify-center shrink-0">
              <svg class="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </div>
            <div class="flex-1 min-w-0">
              <h3 class="font-bold text-gray-900">Cycling</h3>
              <p class="text-xs text-gray-500 font-semibold">Cardio • Distance × Time</p>
            </div>
          </div>
        </div>
      </div>
    </main>

    <!-- Fixed Bottom Tab Bar -->
    <nav class="bg-white border-t border-gray-100 px-4 py-3 flex justify-around items-center shrink-0">
      <!-- Today Tab -->
      <RouterLink
        to="/"
        class="flex flex-col items-center gap-1 text-gray-300 hover:text-gray-500 cursor-pointer transition-all"
      >
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
          ></path>
        </svg>
        <span class="text-[10px] font-black uppercase tracking-widest">Today</span>
      </RouterLink>

      <!-- Exercises Tab (Active) -->
      <div class="flex flex-col items-center gap-1 text-indigo-600 transition-all">
        <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
        </svg>
        <span class="text-[10px] font-black uppercase tracking-widest">Exercises</span>
      </div>

      <!-- History Tab -->
      <div
        class="flex flex-col items-center gap-1 text-gray-300 hover:text-gray-500 cursor-pointer transition-all"
      >
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
          ></path>
        </svg>
        <span class="text-[10px] font-black uppercase tracking-widest">History</span>
      </div>

      <!-- Profile Tab -->
      <RouterLink
        to="/profile"
        class="flex flex-col items-center gap-1 text-gray-300 hover:text-gray-500 cursor-pointer transition-all"
      >
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
          ></path>
        </svg>
        <span class="text-[10px] font-black uppercase tracking-widest">Profile</span>
      </RouterLink>
    </nav>
  </div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>
