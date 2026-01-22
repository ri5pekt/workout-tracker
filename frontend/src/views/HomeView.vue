<template>
  <div class="min-h-screen flex flex-col">
    <!-- App Bar -->
    <header
      class="bg-white/80 backdrop-blur-md border-b border-gray-100 px-6 py-4 flex justify-between items-center shrink-0"
    >
      <div class="flex items-center gap-2">
        <div
          class="w-7 h-7 bg-indigo-600 rounded-lg flex items-center justify-center shadow-sm shadow-indigo-200"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-4 w-4 text-white"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M13 7H7v6h6V7z" />
            <path
              fill-rule="evenodd"
              d="M7 2a1 1 0 012 0v1h2V2a1 1 0 112 0v1h2a2 2 0 012 2v2h1a1 1 0 110 2h-1v2h1a1 1 0 110 2h-1v2a2 2 0 01-2 2h-2v1a1 1 0 11-2 0v-1H9v1a1 1 0 11-2 0v-1H5a2 2 0 01-2-2v-2H2a1 1 0 110-2h1V9H2a1 1 0 010-2h1V5a2 2 0 012-2h2V2zM5 5v10h10V5H5z"
              clip-rule="evenodd"
            />
          </svg>
        </div>
        <span class="font-extrabold text-gray-900 tracking-tight text-sm uppercase italic"
          >workout-tracker</span
        >
      </div>
      <span class="text-xs font-bold text-gray-400">{{ currentDate }}</span>
    </header>

    <!-- Main Content Area (Scrollable) -->
    <main class="flex-1 overflow-y-auto hide-scrollbar px-5 py-6">
      <!-- Greeting Block -->
      <section class="mb-8">
        <h1 class="text-3xl font-extrabold text-gray-900 tracking-tight">
          Hey {{ authStore.user?.name || 'there' }} 👋
        </h1>
        <p class="text-gray-500 font-medium mt-1">Ready to log a workout today?</p>
      </section>

      <!-- Primary Action -->
      <button
        class="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4 rounded-2xl shadow-lg shadow-indigo-100 transition-all active:scale-[0.97] flex items-center justify-center gap-3 mb-10"
      >
        <div class="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-4 w-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M12 4v16m8-8H4" />
          </svg>
        </div>
        New workout
      </button>

      <!-- Recent Workouts List -->
      <section>
        <div class="flex justify-between items-center mb-4">
          <h2 class="text-[11px] font-black text-gray-400 uppercase tracking-[0.15em]">
            Recent Workouts
          </h2>
        </div>

        <!-- Empty State -->
        <div class="bg-white border-2 border-dashed border-gray-200 rounded-2xl p-12 text-center">
          <div class="inline-flex items-center justify-center w-16 h-16 bg-gray-100 rounded-full mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-8 w-8 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
              />
            </svg>
          </div>
          <h3 class="text-lg font-bold text-gray-900 mb-2">No workouts yet</h3>
          <p class="text-sm text-gray-500 mb-6">Start your fitness journey by creating your first workout</p>
          <button
            class="bg-indigo-100 hover:bg-indigo-200 text-indigo-700 font-bold px-6 py-2.5 rounded-xl transition-all active:scale-[0.97]"
          >
            Create First Workout
          </button>
        </div>
      </section>
    </main>

    <!-- Fixed Bottom Tab Bar -->
    <nav class="bg-white border-t border-gray-100 px-8 py-4 flex justify-between items-center shrink-0">
      <!-- Active Tab -->
      <div class="flex flex-col items-center gap-1 text-indigo-600 transition-all">
        <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path
            d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"
          ></path>
        </svg>
        <span class="text-[10px] font-black uppercase tracking-widest">Today</span>
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

      <!-- Settings Tab -->
      <div
        @click="handleLogout"
        class="flex flex-col items-center gap-1 text-gray-300 hover:text-gray-500 cursor-pointer transition-all"
      >
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
          ></path>
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          ></path>
        </svg>
        <span class="text-[10px] font-black uppercase tracking-widest">Logout</span>
      </div>
    </nav>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useRouter } from 'vue-router';
import { useAuthStore } from '@/stores/auth';

const router = useRouter();
const authStore = useAuthStore();

const currentDate = computed(() => {
  const now = new Date();
  const days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
  const months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
  return `${days[now.getDay()]}, ${months[now.getMonth()]} ${now.getDate()}`;
});

async function handleLogout() {
  await authStore.logout();
  router.push({ name: 'login' });
}
</script>
