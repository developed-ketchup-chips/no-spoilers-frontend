<template>
  <v-container class="">
    <v-responsive class="align-center text-center">

      <h1 class="text-h2 font-weight-bold">My rooms</h1>
      <ul class="card-list">
        <RoomCard v-for="(room,index) in rooms" :key="index" v-bind="room"/>
      </ul>

    </v-responsive>
  </v-container>
</template>

<script lang="ts" setup>

import RoomCard from '@/components/RoomCard.vue'
import { ref } from 'vue'

const rooms = ref([{title:'Room1', id: 1, length: '100 pages',
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
{title:'Room2', id: 2, length: '100 pages',
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

}]},{title:'Room3', id: 3, length: '100 pages',
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

<style>
.card-list{
  display: grid;
  grid-template-columns: repeat( auto-fit, minmax(250px, 1fr) );
}
</style>
