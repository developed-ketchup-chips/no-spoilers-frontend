<template>
  <v-container class="fill-height">
    <v-responsive class="align-center text-center fill-height">

      <h2 class="text-h2 font-weight-bold">Sign in with email</h2>

      <div class="py-14" />
      Enter the email address associated with your account, and we’ll send a magic link to your inbox.
      <div class="py-14" />
      <!-- <v-row justify="center" class="ma-2">
        <v-col cols="4"><v-text-field label="Email" placeholder="Email"></v-text-field></v-col>
      </v-row>
      <v-btn
          color="primary"
        >
        Continue
        </v-btn> -->
      <form>
        <p>email: <input type="text" required></p>
        <button type="submit">continue</button>
      </form>
    </v-responsive>
  </v-container>
</template>

<script lang="ts" setup>


</script>
