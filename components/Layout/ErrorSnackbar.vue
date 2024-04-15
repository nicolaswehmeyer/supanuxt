<script setup>
import { useAppStore } from '@/stores/AppStore'

const appStore = useAppStore()
</script>

<template>
  <v-snackbar v-model="appStore.app.error">
    {{ appStore.app.errorMessage }}
    <template v-slot:actions>
      <v-btn color="red" variant="text" @click="appStore.unsetError">
        CLOSE
      </v-btn>
    </template>
  </v-snackbar>
</template>
