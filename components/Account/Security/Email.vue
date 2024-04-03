<script setup>
import { useAuthStore } from '@/stores/AuthStore'

const authStore = useAuthStore()
const newEmail = ref(null)
const newEmailConfirm = ref(null)

const newEmailIsInvalid = computed(() => {
  if (
    !newEmail.value ||
    !newEmailConfirm.value ||
    newEmail.value !== newEmailConfirm.value
  ) {
    return true
  }
  return false
})
</script>

<template>
  <v-toolbar color="background" density="compact">
    <v-toolbar-title> Update Email </v-toolbar-title>
  </v-toolbar>
  <v-row>
    <v-col>
      <v-text-field
        density="compact"
        variant="outlined"
        :model-value="authStore.user.email"
        :v-model="authStore.user.email"
        label="Current Email"
        disabled
        type="text"
        color="error"
      ></v-text-field>
      <v-text-field
        density="compact"
        variant="outlined"
        v-model="newEmail"
        label="New Email"
        type="text"
      ></v-text-field>
      <v-text-field
        density="compact"
        variant="outlined"
        v-model="newEmailConfirm"
        label="Confirm Email"
        type="text"
      ></v-text-field>
    </v-col>
    <v-col cols="6" offset="6">
      <v-btn
        block
        @click="authStore.updateEmail(newEmail)"
        :disabled="newEmailIsInvalid"
      >
        Update Email
      </v-btn>
    </v-col>
  </v-row>
</template>
