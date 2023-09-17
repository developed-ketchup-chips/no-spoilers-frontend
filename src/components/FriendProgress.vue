<template>
  <div>
    <h5 class="h5">{{name}}</h5>
    <v-progress-linear
    bg-color="pink-lighten-3"
    color="pink-lighten-1"
    :model-value="progress"
    ></v-progress-linear>
  </div>
</template>

<script lang="ts" setup>

    defineProps({
      name: String,
      progress: Number
    })

</script>
