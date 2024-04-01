<script setup>
import { storeToRefs } from 'pinia'
import { useAppStore } from '@/stores/AppStore'
const { app } = storeToRefs(useAppStore())
</script>

<template>
  <v-progress-linear
    app
    :active="app.loading"
    :indeterminate="app.loading"
    fixed
    color="secondary"
  ></v-progress-linear>
</template>
