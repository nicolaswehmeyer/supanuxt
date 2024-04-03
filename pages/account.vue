<script setup>
const links = [
  ['mdi-pencil', 'User Profile', '/account/profile'],
  ['mdi-cog', 'Application Settings', '/account/application-settings'],
  ['mdi-lock', 'Password & Security', '/account/security'],
]
</script>

<template>
  <v-navigation-drawer color="background" location="left" app>
    <v-list density="compact" nav>
      <v-list-item
        v-for="[icon, text, route] in links"
        :key="icon"
        :prepend-icon="icon"
        :title="text"
        :to="route"
        link
      >
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
  <v-container>
    <NuxtPage />
  </v-container>
</template>
