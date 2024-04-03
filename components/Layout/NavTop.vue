<script setup>
import { useAuthStore } from '@/stores/AuthStore'
import { useAppStore } from '@/stores/AppStore'

const authStore = useAuthStore()
const appStore = useAppStore()
const user = useSupabaseUser()

const links = [
  {
    title: 'Account',
    url: '/account/profile',
    icon: 'mdi-account',
    action: null,
  },
  {
    title: 'Logout',
    url: '',
    icon: 'mdi-logout',
    action: authStore.handleSignOut,
  },
]
</script>

<template>
  <v-app-bar app density="comfortable" border elevation="0">
    <v-app-bar-nav-icon @click="appStore.switchNavRail"> </v-app-bar-nav-icon>
    <v-app-bar-title style="text-transform: capitalize">{{
      $route.name
    }}</v-app-bar-title>
    <v-menu>
      <template v-slot:activator="{ props }">
        <v-btn icon v-bind="props">
          <v-avatar
            :icon="!authStore.userProfile.photo ? 'mdi-account' : ''"
            :image="
              authStore.userProfile.photo ? authStore.userProfile.photo : ''
            "
          >
          </v-avatar>
        </v-btn>
      </template>
      <v-list>
        <v-list-item v-for="link in links" :to="link.url" @click="link.action">
          <template v-slot:prepend>
            <v-icon :icon="link.icon"></v-icon>
          </template>
          <v-list-item-title>{{ link.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-app-bar>
</template>
