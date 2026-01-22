<template>
  <div class="min-h-screen flex flex-col bg-gray-50">
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
      <h1 class="text-lg font-extrabold text-gray-900">Profile</h1>
    </header>

    <!-- Main Content Area (Scrollable) -->
    <main class="flex-1 overflow-y-auto hide-scrollbar px-5 py-6">
      <!-- User Info Card -->
      <div class="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 mb-6">
        <div class="flex items-center gap-4 mb-6">
          <div class="w-20 h-20 bg-indigo-100 rounded-full flex items-center justify-center">
            <svg class="w-10 h-10 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              ></path>
            </svg>
          </div>
          <div class="flex-1">
            <h2 class="text-2xl font-extrabold text-gray-900">{{ authStore.user?.name || 'User' }}</h2>
            <p class="text-sm text-gray-500">{{ authStore.user?.email }}</p>
          </div>
        </div>

        <!-- User Stats -->
        <div class="grid grid-cols-3 gap-4 pt-4 border-t border-gray-100">
          <div class="text-center">
            <div class="text-2xl font-extrabold text-gray-900">0</div>
            <div class="text-xs text-gray-500 font-semibold">Workouts</div>
          </div>
          <div class="text-center">
            <div class="text-2xl font-extrabold text-gray-900">0</div>
            <div class="text-xs text-gray-500 font-semibold">This Week</div>
          </div>
          <div class="text-center">
            <div class="text-2xl font-extrabold text-gray-900">0</div>
            <div class="text-xs text-gray-500 font-semibold">Streak</div>
          </div>
        </div>
      </div>

      <!-- Settings Section -->
      <div class="mb-4">
        <h3 class="text-[11px] font-black text-gray-400 uppercase tracking-[0.15em] mb-3 px-1">
          Settings
        </h3>

        <div class="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <!-- Edit Profile -->
          <button
            class="w-full flex items-center justify-between px-5 py-4 hover:bg-gray-50 transition-colors border-b border-gray-100"
          >
            <div class="flex items-center gap-3">
              <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                ></path>
              </svg>
              <span class="font-semibold text-gray-900">Edit Profile</span>
            </div>
            <svg class="w-5 h-5 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </button>

          <!-- Weight Tracking -->
          <button
            class="w-full flex items-center justify-between px-5 py-4 hover:bg-gray-50 transition-colors"
          >
            <div class="flex items-center gap-3">
              <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                ></path>
              </svg>
              <span class="font-semibold text-gray-900">Weight Tracking</span>
            </div>
            <svg class="w-5 h-5 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>
      </div>

      <!-- Danger Zone -->
      <div class="mb-4">
        <h3 class="text-[11px] font-black text-gray-400 uppercase tracking-[0.15em] mb-3 px-1">
          Account
        </h3>

        <div class="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <button
            @click="handleLogout"
            class="w-full flex items-center justify-between px-5 py-4 hover:bg-red-50 transition-colors group"
          >
            <div class="flex items-center gap-3">
              <svg class="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                ></path>
              </svg>
              <span class="font-semibold text-red-600 group-hover:text-red-700">Logout</span>
            </div>
          </button>
        </div>
      </div>

      <!-- App Info -->
      <div class="text-center py-8">
        <p class="text-xs text-gray-400 font-semibold">Workout Tracker v1.0.0</p>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { useRouter, RouterLink } from 'vue-router';
import { useAuthStore } from '@/stores/auth';

const router = useRouter();
const authStore = useAuthStore();

async function handleLogout() {
  await authStore.logout();
  router.push({ name: 'login' });
}
</script>
