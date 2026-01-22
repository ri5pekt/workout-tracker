<template>
  <div class="h-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center p-4">
    <div class="w-full max-w-md">
      <!-- Logo/Brand -->
      <div class="text-center mb-8">
        <div class="inline-flex items-center justify-center w-16 h-16 bg-white rounded-2xl shadow-lg mb-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-10 w-10 text-indigo-600"
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
        <h1 class="text-3xl font-extrabold text-white tracking-tight uppercase italic">
          Workout-Tracker
        </h1>
        <p class="text-indigo-100 mt-2">Sign in to track your progress</p>
      </div>

      <!-- Login Form -->
      <div class="bg-white rounded-3xl shadow-2xl p-8">
        <form @submit.prevent="handleLogin" class="space-y-5">
          <!-- Email -->
          <div>
            <label for="email" class="block text-sm font-bold text-gray-700 mb-2">
              Email
            </label>
            <input
              id="email"
              v-model="form.email"
              type="email"
              required
              class="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
              placeholder="your@email.com"
            />
          </div>

          <!-- Password -->
          <div>
            <label for="password" class="block text-sm font-bold text-gray-700 mb-2">
              Password
            </label>
            <input
              id="password"
              v-model="form.password"
              type="password"
              required
              class="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
              placeholder="••••••••"
            />
          </div>

          <!-- Error Message -->
          <div v-if="authStore.error" class="bg-red-50 border-2 border-red-200 rounded-xl p-3">
            <p class="text-sm text-red-600 font-semibold">{{ authStore.error }}</p>
          </div>

          <!-- Submit Button -->
          <button
            type="submit"
            :disabled="authStore.loading"
            class="w-full bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-300 text-white font-bold py-4 rounded-xl shadow-lg transition-all active:scale-[0.98] flex items-center justify-center gap-2"
          >
            <span v-if="authStore.loading">Signing in...</span>
            <span v-else>Sign In</span>
          </button>
        </form>

        <!-- Register Link -->
        <div class="mt-6 text-center">
          <p class="text-sm text-gray-600">
            Don't have an account?
            <RouterLink
              to="/register"
              class="font-bold text-indigo-600 hover:text-indigo-700"
            >
              Create one
            </RouterLink>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import { useRouter, RouterLink } from 'vue-router';
import { useAuthStore } from '@/stores/auth';

const router = useRouter();
const authStore = useAuthStore();

const form = reactive({
  email: '',
  password: '',
});

async function handleLogin() {
  authStore.clearError();
  const success = await authStore.login(form.email, form.password);
  if (success) {
    router.push({ name: 'home' });
  }
}
</script>
