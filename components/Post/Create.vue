<script setup>
import { useAuthStore } from '@/stores/AuthStore'

const authStore = useAuthStore()
</script>

<template>
  <v-container>
    <v-card class="mx-auto" theme="dark">
      <template v-slot:prepend>
        <v-layout>
          <v-avatar :image="authStore.userProfile.photo"></v-avatar>
          <v-text-field
            label="Share your thoughts"
            class="d-inline"
          ></v-text-field>
        </v-layout>
      </template>
      <v-card-text class=""> Test </v-card-text>
    </v-card>
  </v-container>
</template>
