<script setup>
import { useAuthStore } from '@/stores/AuthStore'

const authStore = useAuthStore()
const selectedFile = ref(null)
const fileUploader = ref(null)

const handleFileImport = () => {
  fileUploader.value.click()
}

const updatePhoto = (e) => {
  selectedFile.value = e.target.files
  authStore.updatePhoto(selectedFile.value)
}
</script>

<template>
  <v-container>
    <v-row>
      <v-col>
        <v-hover v-slot="{ isHovering, props }">
          <v-layout v-bind="props" class="justify-center">
            <v-img
              class="rounded-circle"
              :src="authStore.userProfile.photo"
              max-width="148"
              max-heigth="148"
            />
            <v-overlay
              :model-value="isHovering"
              contained
              scrim="#036358"
              class="align-center justify-center"
            >
              <v-btn variant="flat" @click="handleFileImport">
                Update Photo
              </v-btn>
              <input
                ref="fileUploader"
                class="d-none"
                type="file"
                @change="updatePhoto"
              />
            </v-overlay>
          </v-layout>
        </v-hover>
      </v-col>
    </v-row>
  </v-container>
</template>
