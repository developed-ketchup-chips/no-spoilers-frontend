<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent width="1024">
      <template v-slot:activator="{ props }">
        <v-btn color="primary" v-bind="props">
          Open Dialog
        </v-btn>
      </template>
      <v-card color="background">
        <v-card-title>
          <span class="text-h5">Update Progress</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12" sm="6">
                <v-slider v-model="value" :min="0" :max="50" :step="1" thumb-label color="primary"></v-slider>
              </v-col>
              <v-col>
                <span>{{ value }}/ </span>
              </v-col>
            </v-row>
            <v-col cols="12">
              <v-textarea variant="filled" auto-grow label="Comment" rows="4" row-height="30" shaped
                color="primary"></v-textarea> </v-col>
          </v-container>
          <small>*indicates required field</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue-darken-1" variant="text" @click="dialog = false">
            Close
          </v-btn>
          <v-btn color="blue-darken-1" variant="text" @click="dialog = false">
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      dialog: false,
      value: 0,
    };
  },
};
</script>
