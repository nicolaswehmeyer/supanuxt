<script setup>
import { useAuthStore } from '@/stores/AuthStore'

const authStore = useAuthStore()
</script>

<template>
  <v-container>
    <v-row>
      <v-col>
        <h1>Hi {{ authStore.userProfile.firstname }}!</h1>
        <br>
        <p>Get started by creating your own components and pages.</p>
        <br>
        <p>I hope this helps you get started with your project easily</p>
        <br>
        <p>Yours, Nick</p>
      </v-col>
    </v-row>
  </v-container>
</template>
