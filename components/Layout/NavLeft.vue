<script setup>
import { storeToRefs } from 'pinia'
import { useAuthStore } from '@/stores/AuthStore'
import { useAppStore } from '@/stores/AppStore'

const authStore = useAuthStore()
const appStore = useAppStore()

const { app } = storeToRefs(useAppStore())

const links = [
  { icon: 'mdi-home', title: 'Home', url: '/home' }
]
</script>

<template>
  <v-navigation-drawer
    color="background"
    v-model="app.navDrawer"
    :rail="app.navRail"
    location="left"
    app
  >
    <v-list-item
      height="57px"
      prepend-avatar="/img/logo.png"
      :title="authStore.userProfile.username"
      class="py-2"
    ></v-list-item>

    <v-list density="compact" nav>
      <v-list-item
        v-for="link in links"
        :key="link.icon"
        :prepend-icon="link.icon"
        :title="link.title"
        :to="link.url"
        link
      >
      </v-list-item>
    </v-list>
    <template v-slot:append>
      <v-list density="compact" nav>
        <v-list-item
          key="icon"
          prepend-icon="mdi-logout"
          title="Logout"
          @click="authStore.handleSignOut"
          link
        >
        </v-list-item>
      </v-list>
    </template>
  </v-navigation-drawer>
</template>
