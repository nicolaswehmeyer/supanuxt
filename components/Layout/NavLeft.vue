<script setup>
import { storeToRefs } from 'pinia'
import { useAuthStore } from '@/stores/AuthStore'

const authStore = useAuthStore()

const links = [
  { icon: 'mdi-home', title: 'Home', url: '/home' }
]
</script>

<template>
  <v-navigation-drawer
    rail
    location="left"
    app
  >
    <v-list-item
      height="57px"
      prepend-avatar="/img/logo.png"
      :title="authStore.userProfile.username"
      class="py-2"
    >
      <template v-slot:append>
        <v-btn
          on-hover
          variant="text"
          icon="mdi-chevron-left"
        ></v-btn>
      </template>
    </v-list-item>

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
