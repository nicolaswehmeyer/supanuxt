<script setup>
import { useAuthStore } from '@/stores/AuthStore'

const authStore = useAuthStore()
const tab = ref(null)

watchEffect(async () => {
  if (authStore.user) {
    await navigateTo("/home")
  }
})
</script>

<template>
  <v-container fluid class="fill-height" id="login-page">
    <v-container id="login-container">
      <v-row>
        <v-col>
          <v-card class="elevation-12">
            <v-tabs v-model="tab" grow>
              <v-tab value="login">Login</v-tab>
              <v-tab value="register">Register</v-tab>
            </v-tabs>
            <v-card-text>
              <v-window v-model="tab">
                <v-window-item value="login">
                  <AuthLocalLogin />
                  <v-divider />
                  <v-card-actions>
                    <AuthFacebookLogin />
                  </v-card-actions>
                  <v-card-actions>
                    <AuthGithubLogin />
                  </v-card-actions>
                </v-window-item>
                <v-window-item value="register">
                  <AuthRegister />
                </v-window-item>
              </v-window>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>

<style scoped>
#login-page {
  background-image: url("/img/dubai1.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
}

#login-container {
  width: 500px;
}
</style>