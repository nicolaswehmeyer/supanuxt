<script setup>
import { useTheme } from 'vuetify'
import { useAppStore } from '@/stores/AppStore'

const appStore = useAppStore()
const theme = useTheme()

watchEffect(() => {
  theme.global.name.value = appStore.app.darkMode ? 'dark' : 'light'
})
</script>

<template>
  <v-app id="AuthenticatedLayout">
    <LayoutLoader />
    <LayoutNavLeft />
    <LayoutNavTop />
    <v-main>
      <slot />
    </v-main>
    <LayoutSuccessSnackbar />
    <LayoutErrorSnackbar />
    <LayoutLoader />
  </v-app>
</template>
