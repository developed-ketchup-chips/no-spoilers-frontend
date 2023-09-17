<template>
  <v-container class="">
    <v-responsive class="align-center text-center">

      <h1 class="text-h2 font-weight-bold">My rooms</h1>
      <ul class="card-list">
        <RoomCard v-for="(room,index) in rooms" :key="index" v-bind="room"/>
      </ul>


    </v-responsive>
    <RoomUpdate />
  </v-container>
</template>

<script setup>

import RoomCard from '@/components/RoomCard.vue'
import RoomUpdate from '@/components/RoomUpdate.vue'
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

}]},{title:'Room1',length: '100 pages',
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
