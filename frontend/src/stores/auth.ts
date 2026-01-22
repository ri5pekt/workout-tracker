import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import { ApiClient } from '@/utils/api';
import type { User, AuthResponse } from '@/types';

export const useAuthStore = defineStore('auth', () => {
  const user = ref<User | null>(null);
  const loading = ref(false);
  const error = ref<string | null>(null);

  const isAuthenticated = computed(() => !!user.value);

  async function register(email: string, password: string, name: string) {
    loading.value = true;
    error.value = null;
    try {
      const response = await ApiClient.post<AuthResponse>('/api/auth/register', {
        email,
        password,
        name,
      });

      user.value = response.user;
      ApiClient.setAccessToken(response.accessToken);

      return true;
    } catch (err: any) {
      error.value = err.message || 'Registration failed';
      return false;
    } finally {
      loading.value = false;
    }
  }

  async function login(email: string, password: string) {
    loading.value = true;
    error.value = null;
    try {
      const response = await ApiClient.post<AuthResponse>('/api/auth/login', {
        email,
        password,
      });

      user.value = response.user;
      ApiClient.setAccessToken(response.accessToken);

      return true;
    } catch (err: any) {
      error.value = err.message || 'Login failed';
      return false;
    } finally {
      loading.value = false;
    }
  }

  async function logout() {
    loading.value = true;
    try {
      await ApiClient.post('/api/auth/logout');
    } catch (err) {
      console.error('Logout error:', err);
    } finally {
      user.value = null;
      ApiClient.setAccessToken(null);
      loading.value = false;
    }
  }

  async function fetchCurrentUser() {
    const token = ApiClient.getAccessToken();
    if (!token) return false;

    loading.value = true;
    try {
      const response = await ApiClient.get<{ user: User }>('/api/users/me');
      user.value = response.user;
      return true;
    } catch (err) {
      // Token might be expired
      ApiClient.setAccessToken(null);
      return false;
    } finally {
      loading.value = false;
    }
  }

  async function refreshToken() {
    try {
      const response = await ApiClient.post<{ accessToken: string }>('/api/auth/refresh');
      ApiClient.setAccessToken(response.accessToken);
      return true;
    } catch (err) {
      return false;
    }
  }

  function clearError() {
    error.value = null;
  }

  return {
    user,
    loading,
    error,
    isAuthenticated,
    register,
    login,
    logout,
    fetchCurrentUser,
    refreshToken,
    clearError,
  };
});
