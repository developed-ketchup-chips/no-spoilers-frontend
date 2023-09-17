
<template>
  <v-container class="fill-height">
    <v-responsive class="align-center text-center fill-height">

      <h2 class="text-h2 font-weight-bold">Sign in with email</h2>

      <div class="py-14" />
      Enter the email address associated with your account, and we’ll send a magic link to your inbox.
      <div class="py-14" />
      <form>
        <v-text-field
          v-model="email"
          label="Email"
          type="email"
          required></v-text-field>
        <button @click="submit">Continue</button>
      </form>
    </v-responsive>
  </v-container>
</template>

<script lang="ts">
import {authenticate} from '@/api'

export default {
  data() {
    return {
      email: ''
    }
  },
  methods: {
    async submit(e: Event) {
      e.preventDefault();
      await authenticate(this.email);
      this.email = '';
      this.$router.push('/rooms');
    }
  }
}
</script>
