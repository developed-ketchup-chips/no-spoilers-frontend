<template>
  <v-container class="fill-height">
    <v-responsive class="align-center text-center fill-height">
      <h1 class="text-h2 font-weight-bold">No Spoilers!</h1>

      <!-- <div class="py-14">Invite Only</div> -->

      <RoomAdd />
    </v-responsive>
  </v-container>
</template>

<script lang="ts" setup>
import RoomAdd from '@/components/RoomAdd.vue'
</script>
