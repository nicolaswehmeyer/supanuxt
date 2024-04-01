import auth from '~/middleware/auth';
<script setup>
import { useAuthStore } from '@/stores/AuthStore'

const authStore = useAuthStore()
const posts = ref([
  {
    creator: 'Nicolas Wehmeyer',
    content: 'Unbelievable, how gay you are!',
    timestamp: 1695243669,
    comments: [
      {
        username: 'Nicolas Wehmeyer',
        content: 'Very well said!',
        timestamp: new Date(1695243669),
      },
    ],
  },
])
</script>

<template>
  <!--
  <v-card
    v-for="post in posts"
    class="mx-auto"
    width="600"
    theme="dark"
  >
    <template v-slot:prepend>
      <v-row>
        <v-col>
          <v-avatar :image="authStore.userProfile.photo"></v-avatar>
        </v-col>
        <v-col>
          <v-list-item-title>
            {{ post.creator }}
          </v-list-item-title>
          <v-layout>
            {{ post.timestamp }}
          </v-layout>
        </v-col>
      </v-row>
    </template>

    <template v-slot:append>
      <v-btn elevation="0" icon="mdi-dots-vertical"></v-btn>
    </template>

    <v-card-text class="text-h5 py-2">
      {{ post.content }}
    </v-card-text>

    <v-card-actions>
      <v-list-item class="w-100">
        <v-list-item-subtitle>Vue Creator</v-list-item-subtitle>
        <template v-slot:append>
          <div class="justify-self-end">
            <v-icon class="me-1" icon="mdi-heart"></v-icon>
            <span class="subheading me-2">256</span>
            <span class="me-1">·</span>
            <v-icon class="me-1" icon="mdi-share-variant"></v-icon>
            <span class="subheading">45</span>
          </div>
        </template>
      </v-list-item>
    </v-card-actions>
  </v-card>-->
  <v-card v-for="post in posts" class="mx-auto" width="600">
    <v-card-title>
      <v-avatar>
        <img :src="authStore.userProfile.photo" />
      </v-avatar>
      <v-layout class="d-inline pa-2">
        {{ post.creator }}
      </v-layout>
      <v-btn elevation="0" icon="mdi-dots-vertical"></v-btn>
    </v-card-title>

    <v-card-text>
      {{ post.content }}
    </v-card-text>

    <v-card-actions>
      <v-btn icon>
        <v-icon>mdi-thumb-up</v-icon>
      </v-btn>
      <span class="like-count">
        {{ post.timestamp }}
      </span>
    </v-card-actions>
  </v-card>
</template>
