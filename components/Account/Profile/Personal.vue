<script setup>
import { useAuthStore } from '@/stores/AuthStore'

const authStore = useAuthStore()
</script>

<template>
  <v-toolbar density="compact" color="background">
    <v-toolbar-title> Personal Information </v-toolbar-title>
  </v-toolbar>
  <v-row>
    <v-col cols="6">
      <v-text-field
        density="compact"
        variant="outlined"
        v-model="authStore.userProfile.firstname"
        label="Name"
        type="text"
        required
      ></v-text-field>
    </v-col>
    <v-col cols="6">
      <v-text-field
        density="compact"
        variant="outlined"
        v-model="authStore.userProfile.lastname"
        label="Last name"
        type="text"
        required
      ></v-text-field>
    </v-col>
  </v-row>
  <v-text-field
    density="compact"
    variant="outlined"
    v-model="authStore.userProfile.username"
    label="Username"
    type="text"
    required
  ></v-text-field>
</template>
