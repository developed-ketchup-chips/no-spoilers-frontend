<template>
  <v-container class="">
    <v-responsive class="align-center text-center ">
      <v-card
      class="mx-auto room-card"
      max-width="344"

      >
      <v-card-text>
        <h1>SINGLE ROOM VIEW</h1>
        <h1>Room ID: {{ $route.params.id }}</h1>

        <h2 class="text-h5 font-weight-bold pa-md-6">{{title}} id:{{ id  }}</h2>
        <p class="pt-2">length: {{ length }}</p>
        <p class="pt-2">type : {{ type }}</p>
    </v-card-text>
    <div>
        <p>My progress:</p>
        <v-progress-linear
        bg-color="pink-lighten-3"
        color="pink-lighten-1"
        :model-value="progress"
        ></v-progress-linear>
      </div>
      <ul class="pt-3">
        <FriendProgress v-for="(friend,index) in friendProgressData" :key="index+1" v-bind="friend"/>
      </ul>

  </v-card>


    </v-responsive>
  </v-container>
</template>

<script lang="ts" setup>

import FriendProgress from '@/components/FriendProgress.vue'
defineProps({
      title: String,
      length: String,
      type: String,
      progress:Number,
      friendProgressData: Array,
      id:Number
    })
</script>
