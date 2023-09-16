<template>
  <div>
    <h4 class="h3">{{name}}</h4>
    <v-progress-linear
    bg-color="pink-lighten-3"
    color="pink-lighten-1"
    :model-value="progress"
    ></v-progress-linear>
  </div>
</template>

<script setup>

    defineProps({
      name: String,
      progress: Number
    })

</script>
