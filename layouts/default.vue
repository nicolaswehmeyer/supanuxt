<script setup></script>

<template>
  <v-app id="DefaultLayout">
    <v-main>
      <slot />
    </v-main>
    <LayoutSuccessSnackbar />
    <LayoutErrorSnackbar />
    <LayoutLoader />
  </v-app>
</template>
