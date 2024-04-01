<script setup>
import { useAppStore } from '@/stores/AppStore'

const appStore = useAppStore()
</script>

<template>
  <v-snackbar v-model="appStore.app.success">
    {{ appStore.app.successMessage }}
    <template v-slot:actions>
      <v-btn color="green" variant="text" @click="appStore.unsetSuccess">
        Close
      </v-btn>
    </template>
  </v-snackbar>
</template>
