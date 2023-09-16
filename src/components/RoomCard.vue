<template>
  <v-container class="fill-height">
    <v-responsive class="align-center text-center fill-height">

      <h2 class="text-h5 font-weight-bold">{{title}}</h2>
      <p>length: {{ length }}</p>
      <p>type : {{ type }}</p>
      <div>
        <p>My progress:</p>
        <v-progress-linear
        bg-color="pink-lighten-3"
        color="pink-lighten-1"
        :model-value="progress"
        ></v-progress-linear>
      </div>
      <ul>
        <FriendProgress v-for="(friend,index) in friendProgressData" :key="index+1" v-bind="friend"/>
      </ul>

    </v-responsive>
  </v-container>
</template>

<script setup>


import FriendProgress from '@/components/FriendProgress.vue'
defineProps({
      title: String,
      length: String,
      type: String,
      progress:Number,
      friendProgressData: Array,
    })



</script>
