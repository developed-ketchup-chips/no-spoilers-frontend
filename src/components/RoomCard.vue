<template>
  <v-container class="">
    <v-responsive class="align-center text-center ">
      <v-card class="mx-auto room-card" max-width="344" :data-code="code">
        <v-card-text>
          <h2 class="text-h5 font-weight-bold pa-md-6">{{ name }}</h2>
          <p class="pt-2">length: {{ length }}</p>
          <p class="pt-2">type : {{ type }}</p>
        </v-card-text>
        <div>
          <p>My progress:</p>
          <v-progress-linear bg-color="pink-lighten-3" color="pink-lighten-1" :model-value="progress"></v-progress-linear>
        </div>
        <ul class="pt-3">
          <FriendProgress v-for="(friend, index) in members" :key="index + 1" v-bind="friend" />
        </ul>
        <v-card-actions>
          <router-link :to="{ name: 'room', params: { code: code } }">
            <button>Head to Room</button>
          </router-link>

        </v-card-actions>
      </v-card>


    </v-responsive>
  </v-container>
</template>

<script lang="ts" setup>
import { Member } from '@/api'

import FriendProgress from '@/components/FriendProgress.vue'
import { PropType } from 'vue';

defineProps({
  name: String,
  length: Number,
  type: String,
  code: String,
  progress: Number,
  members: Array as PropType<Member[]>,
})
</script>

<style>
.room-card {
  padding: 10px;
  background-color: #F3EFE0;
}
</style>
