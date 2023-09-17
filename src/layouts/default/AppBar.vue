<template>
  <v-app-bar flat
          color="primary"
>
    <v-app-bar-title>
      <RouterLink to="/" style="text-decoration: none; color: white;">
        Home
      </RouterLink>
      &nbsp;
      <RouterLink to="/rooms" style="text-decoration: none; color: white;">
        Rooms
      </RouterLink>
    </v-app-bar-title>
  </v-app-bar>
</template>

<script lang="ts" setup>
import { RouterLink } from 'vue-router'
</script>

<style>
        RouterLink:hover {
          text-decoration: underline;
        }
      </style>

