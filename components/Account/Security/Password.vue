<script setup>
import { useAuthStore } from '@/stores/AuthStore'

const authStore = useAuthStore()
const newPassword = ref(null)
const newPasswordConfirm = ref(null)

const newPasswordIsInvalid = computed(() => {
  if (
    !newPassword.value ||
    !newPasswordConfirm.value ||
    newPassword.value !== newPasswordConfirm.value
  ) {
    return true
  }
  return false
})
</script>

<template>
  <v-toolbar density="compact" color="background">
    <v-toolbar-title> Update Password </v-toolbar-title>
  </v-toolbar>
  <v-row>
    <v-col>
      <template v-if="authStore.user.app_metadata.provider !== 'email'">
        <p>
          You cannot update your password since you are logged in using
          {{ authStore.user.app_metadata.provider }}.
        </p>
      </template>
      <template v-else>
        <v-text-field
          density="compact"
          variant="outlined"
          model-value="****************"
          label="Current password"
          disabled
          type="text"
        ></v-text-field>
        <v-text-field
          density="compact"
          variant="outlined"
          v-model="newPassword"
          label="New password"
          type="password"
        ></v-text-field>
        <v-text-field
          density="compact"
          variant="outlined"
          v-model="newPasswordConfirm"
          label="Confirm password"
          type="password"
        ></v-text-field>
      </template>
    </v-col>
    <v-col cols="6" offset="6">
      <v-btn
        block
        :disabled="newPasswordIsInvalid"
        @click="authStore.updatePassword(newPassword)"
        color="blue"
      >
        Update Password
      </v-btn>
    </v-col>
  </v-row>
</template>
