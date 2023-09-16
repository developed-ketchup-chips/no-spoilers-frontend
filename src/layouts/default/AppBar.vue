<template>
  <v-app-bar flat>
    <v-app-bar-title>
      <RouterLink to="/">Home</RouterLink>
      &nbsp;
      <RouterLink to="/rooms">Rooms</RouterLink>
    </v-app-bar-title>
  </v-app-bar>
</template>

<script lang="ts" setup>
import { RouterLink } from 'vue-router'
</script>
