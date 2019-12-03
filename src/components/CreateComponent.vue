<template>
    <v-container grid-list-xs>
    <v-layout justify-center v-show="!isCreating">
      <v-btn color="primary" @click="Show" class="d-none d-md-inline-block">+ Create</v-btn>
      <v-btn fixed large fab bottom right class="d-md-none" @click="Show" color="primary">
        <v-icon>mdi-plus</v-icon>
      </v-btn>
    </v-layout>
    <v-dialog v-model="dialog" persistent max-width="400px">
      <v-layout justify-center v-show="isCreating">
        <v-card min-width="400">
          <v-card-title>
            <span class="headline">
              <i>Create Note</i>
            </span>
          </v-card-title>
          <v-card-text>
             <v-textarea
              class="mx-2"
              label="Titles"
             rows="1"
              ></v-textarea>
              <br>
          <v-textarea
              filled
              auto-grow
              label="Details"
              rows="4"
              row-height="30" 
           ></v-textarea>
           </v-card-text>
           <v-card-actions>
             <v-spacer></v-spacer>
            <v-btn color="primary" text @click="Save">save</v-btn>
            <v-btn color="black" text @click="Hide">cancel</v-btn>
          </v-card-actions>
        </v-card>
      </v-layout>
    </v-dialog>
  </v-container>
</template>

<script>
    export default {
        name: "CreateComponent",
   props: {
    task: {
      type: Object
    }
  },
  data() {
    return {
      isCreating: false,
      title: "",
      details: "",
      dialog: false
    };
  },
  methods: {
    Show() {
      this.isCreating = true;
      this.dialog = true;
    },
    Hide() {
      this.isCreating = false;
      this.dialog = false;
    },
    Save() {
      let saveTask = {
        title: this.title,
        details: this.details,
        done: false
      };

      this.$emit("save-submitted", saveTask);
      this.title = "";
      this.details = "";

      this.Hide();
     }
   }
 };
</script>

<style scoped>

</style>