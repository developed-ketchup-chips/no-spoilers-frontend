<template>
  <v-container class="fill-height">
    <v-responsive class="align-center text-center fill-height">

      <h1 class="text-h2 font-weight-bold">Rooms</h1>

      <div class="py-14" />

      <RoomCard />
      <RoomCard />

    </v-responsive>
  </v-container>
</template>

<script lang="ts" setup>
import RoomCard from '@/components/RoomCard.vue'
</script>
