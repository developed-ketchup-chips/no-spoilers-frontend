<template>
  <v-container class="">
    <v-responsive class="text-center container-cards">

      <h1 class="text-h2 font-weight-bold">My rooms</h1>
      <!-- <RoomUpdate class="mt-4" /> -->
      <ul  v-if="rooms" class="card-list">
        <RoomCard v-for="(room,index) in rooms" :key="index" v-bind="room"/>
      </ul>
    </v-responsive>
    <RoomUpdate />
  </v-container>
</template>

<script lang="ts" setup>

import RoomCard from '@/components/RoomCard.vue'
// import RoomUpdate from '@/components/RoomUpdate.vue'

import { createAPI, Room } from '@/api'
import { onMounted, ref } from 'vue';

const API = createAPI();
const rooms = ref<Room[]|undefined>([]); // Initialize rooms as an empty array of Room objects


onMounted(async () => {
  // Fetch rooms data when the component is mounted
  rooms.value = await API.listRooms();
});

</script>

<style>
.card-list{
  display: grid;
  grid-template-columns: repeat( auto-fit, minmax(250px, 1fr) );

}
.container-cards{

  height: 100vh;
}
</style>
