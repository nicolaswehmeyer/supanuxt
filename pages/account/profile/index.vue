<script setup>
import { useAuthStore } from '@/stores/AuthStore'

const authStore = useAuthStore()
</script>

<template>
  <v-row>
    <v-col cols="12">
      <h1>User Profile</h1>
    </v-col>
    <v-col cols="9">
      <AccountProfilePersonal />
    </v-col>
    <v-col cols="3">
      <AccountProfileImage />
    </v-col>
    <v-col cols="12">
      <AccountProfileAddress />
    </v-col>
    <v-col cols="6" offset="6">
      <v-btn block @click="authStore.updateProfile()"> Save </v-btn>
    </v-col>
  </v-row>
</template>
