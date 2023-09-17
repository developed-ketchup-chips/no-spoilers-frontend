<template>
  <v-container class="fill-height">
    <v-responsive class="align-center text-center fill-height">

      <h1 class="text-h2 font-weight-bold">Rooms</h1>

      <RoomCard v-for="(room,index) in rooms" :key="index" v-bind="room"/>

    </v-responsive>
  </v-container>
</template>

<script setup>

import RoomCard from '@/components/RoomCard.vue'
import { ref } from 'vue'

const rooms = ref([{title:'Room1',length: '100 pages',
      type: 'book',
      progress:50, friendProgressData: [{
  name: 'friend1',
  progress: 10,

},{
  name: 'friend3',
  progress: 10,

},{
  name: 'friend2',
  progress: 20,

}]},
{title:'Room1',length: '100 pages',
      type: 'book',
      progress:50, friendProgressData: [{
  name: 'friend1',
  progress: 10,

},{
  name: 'friend3',
  progress: 10,

},{
  name: 'friend2',
  progress: 20,

}]}])
</script>
