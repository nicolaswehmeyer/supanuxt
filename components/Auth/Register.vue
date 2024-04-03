<script setup>
import { useAuthStore } from '@/stores/AuthStore'
const authStore = useAuthStore()

const email = ref('')
const password = ref('')
const passwordConfirm = ref('')

const inputIsInvalid = computed(() => {
  if (email.value.length < 5 || password.value.length < 6) {
    return true
  } else if (password.value !== passwordConfirm.value) {
    return true
  }
  return false
})
</script>

<template>
  <v-form class="Register" @submit.prevent="authStore.signUp">
    <v-card-text>
      <v-card-title class="text-center pb-6"> Create Account </v-card-title>
      <v-text-field
        v-model="email"
        name="email"
        label="Email"
        prepend-icon="mdi-email"
        type="text"
      ></v-text-field>
      <v-text-field
        v-model="password"
        name="password"
        label="Password"
        prepend-icon="mdi-lock"
        type="password"
      ></v-text-field>
      <v-text-field
        v-model="passwordConfirm"
        name="passwordConfirm"
        label="Confirm Password"
        prepend-icon="mdi-lock"
        type="password"
      ></v-text-field>
    </v-card-text>
    <v-card-actions>
      <v-btn
        block
        variant="elevated"
        prepend-icon="mdi-account"
        color="secondary"
        :disabled="inputIsInvalid"
        @click="authStore.signUp(email, password)"
      >
        Sign Up
      </v-btn>
    </v-card-actions>
  </v-form>
</template>
