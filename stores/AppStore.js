import { defineStore } from 'pinia'
import { useAuthStore } from './AuthStore'

export const useAppStore = defineStore({
  id: 'app',
  state: () => ({
    authStore: useAuthStore(),
    app: {
      error: false,
      errorMessage: false,
      success: false,
      successMessage: false,
      loading: false
    }
  }),
  actions: {
    setLoader(value) {
      this.app.loading = value
    },
    setError(value) {
      this.app.error = true
      this.app.errorMessage = value
    },
    unsetError() {
      this.app.error = false
      this.app.errorMessage = null
    },
    setSuccess(value) {
      this.app.success = true
      this.app.successMessage = value
    },
    unsetSuccess() {
      this.app.success = false
      this.app.successMessage = null
    }
  }
})