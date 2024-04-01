<script setup>
</script>

<template>
  <v-app
    id="AuthenticatedLayout"
  >
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
