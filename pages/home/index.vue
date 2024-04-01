<script setup>
import { useAuthStore } from '@/stores/AuthStore'

const authStore = useAuthStore()
</script>

<template>
  <v-container>
    <v-row>
      <v-col>
        <h1>Hi {{ authStore.userProfile.firstname }}.</h1>
      </v-col>
    </v-row>
  </v-container>
</template>
