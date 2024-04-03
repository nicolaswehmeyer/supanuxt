<script setup>
import { useAuthStore } from '@/stores/AuthStore'

const authStore = useAuthStore()

const email = ref('')
const password = ref('')

const inputIsInvalid = computed(() => {
  if (email.value.length < 5 || password.value.length < 6) {
    return true
  }
  return false
})
</script>

<template>
  <v-form class="AuthLocalLogin">
    <v-card-text>
      <v-card-title class="text-center pb-6">
        Supabase Mail Account
      </v-card-title>
      <v-text-field
        v-model="email"
        name="email"
        label="Email"
        type="text"
        prepend-icon="mdi-account"
      ></v-text-field>
      <v-text-field
        v-model="password"
        name="password"
        label="Password"
        type="password"
        prepend-icon="mdi-lock"
      ></v-text-field>
    </v-card-text>
    <v-card-actions>
      <v-btn
        block
        variant="elevated"
        prepend-icon="mdi-home"
        color="secondary"
        :disabled="inputIsInvalid"
        @click="authStore.signInWithPassword(email, password)"
      >
        Login
      </v-btn>
    </v-card-actions>
  </v-form>
</template>
