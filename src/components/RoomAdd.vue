<template>
  <v-row justify="center">
    <v-dialog
      v-model="dialog"
      persistent
      width="1024"
    >
      <template v-slot:activator="{ props }">
        <v-btn
          color="primary"
          v-bind="props"
        >
          Open Dialog
        </v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="text-h5">Create A Room</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>



              <v-col
                cols="12"
                sm="6"
                md="4"
              >
                <v-text-field
                  label="Name of TV show*"
                  hint="Dont forget to fill me in"
                  persistent-hint
                  required
                ></v-text-field>
              </v-col>

              <v-col
                cols="12"
                sm="6"
              >
              <v-autocomplete
                  :items="['Book', 'TV Show', 'Movie']"
                  label="Media Type"
                  multiple
                ></v-autocomplete>
              </v-col>
              <v-col
                cols="12"
                sm="6"
              >
              <v-text-field
                  label="Media Length*"
                  required
                ></v-text-field>
              </v-col>
            </v-row>
          </v-container>


          <small>*indicates required field</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="blue-darken-1"
            variant="text"
            @click="dialog = false"
          >
            Close
          </v-btn>
          <v-btn
            color="blue-darken-1"
            variant="text"
            @click="dialog = false"
          >
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
  export default {
    data: () => ({
      dialog: false,
    }),
  }
</script>


