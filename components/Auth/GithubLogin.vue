<script setup>
import { useAuthStore } from '@/stores/AuthStore'

const authStore = useAuthStore()
</script>

<template>
  <v-btn
    block
    variant="elevated"
    prepend-icon="mdi-github"
    @click="authStore.signInWithOAuth('github')"
  >
    Github
  </v-btn>
</template>
