<script setup>
import { useAuthStore } from '@/stores/AuthStore'

const authStore = useAuthStore()
</script>

<template>
  <v-btn
    block
    variant="elevated"
    prepend-icon="mdi-facebook"
    @click="authStore.signInWithOAuth('facebook')"
  >
    FaceBook
  </v-btn>
</template>
