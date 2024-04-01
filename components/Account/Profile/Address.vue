<script setup>
import { useAuthStore } from '@/stores/AuthStore'

const authStore = useAuthStore()
</script>

<template>
  <v-toolbar color="background" density="compact">
    <v-toolbar-title> Address </v-toolbar-title>
  </v-toolbar>
  <v-text-field
    density="compact"
    variant="outlined"
    v-model="authStore.userProfile.street"
    label="Street"
    type="text"
    required
  ></v-text-field>
  <v-row>
    <v-col cols="6">
      <v-text-field
        density="compact"
        variant="outlined"
        v-model="authStore.userProfile.postcode"
        label="Post Code"
        type="text"
        required
      ></v-text-field>
    </v-col>
    <v-col cols="6">
      <v-text-field
        density="compact"
        variant="outlined"
        v-model="authStore.userProfile.city"
        label="City"
        type="text"
        required
      ></v-text-field>
    </v-col>
  </v-row>

  <v-text-field
    density="compact"
    variant="outlined"
    v-model="authStore.userProfile.country"
    label="Country"
    type="text"
    required
  ></v-text-field>
</template>
