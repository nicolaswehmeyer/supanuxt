<script setup>
import { useAppStore } from '@/stores/AppStore'

const appStore = useAppStore()
</script>

<template>
  <v-row>
    <v-col>
      <h1>Application Settings</h1>
      <v-card-text>
        <v-switch
          @change="appStore.switchDarkMode"
          :model-value="appStore.app.darkMode"
          hide-details
          inset
          label="Dark Mode"
        ></v-switch>
        <v-switch
          @change="appStore.switchNavDrawer"
          :model-value="appStore.app.navDrawer"
          hide-details
          inset
          label="Display Sidebar"
        ></v-switch>
        <v-switch
          @change="appStore.switchNavRail"
          :model-value="appStore.app.navRail"
          hide-details
          inset
          label="Minimize Sidebar"
        ></v-switch>
      </v-card-text>
    </v-col>
  </v-row>
</template>
