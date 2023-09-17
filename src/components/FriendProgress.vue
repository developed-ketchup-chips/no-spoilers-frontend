<template>
  <div>
    <h5 class="h5">{{name}}</h5>
    <v-progress-linear
    bg-color="beige"
    color="primary"
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
