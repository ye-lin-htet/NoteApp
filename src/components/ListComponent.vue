<template>
   <v-container grid-list-xs>
  <v-tabs grow>
   <v-tab-item>
   <v-alert type="warning" v-show="!tasks.length">There is any Task</v-alert>
       <form-component
          v-for="item of completedAll"
          :key="item['.key']"
          :task="item"
          @delete-task="deleteTask"
          @complete-task="completeTask"
          @update-item="updateTask"
         ></form-component>
   </v-tab-item>
  </v-tabs>
       <CreateComponent @save-submitted="save"></CreateComponent>
       <v-snackbar v-model="snack_created" color="info" top right>
          Task is created
      <v-btn text color="info" @click.native="snack_created = false"></v-btn>
    </v-snackbar>
    <v-snackbar v-model="delete_Dialog" color="black" bottom right>
      Task move to trash
      <v-btn text color="primary" @click="undo">Undo</v-btn>
      <v-btn text @click.native="delete_Dialog=false">
        <v-icon>mdi-close</v-icon>
      </v-btn>
    </v-snackbar>
   </v-container>
</template>

<script>
import { db } from '../config/db';
import CreateComponent from './CreateComponent.vue'
import FormComponent from './FormComponent.vue'
    export default {
        name: 'ListComponent',
        components: {
            CreateComponent,
            FormComponent
        },
        firebase: {
         tasks: db.ref('tasks')
        },
        data() {
            return {
               tasks: [], 
               snack_completed: false,
               snack_created: false,
               delete_Dialog: false,
               undoarr: null,
               trashIndex: Number,
            };
        },
        methods: {
            deleteTask(key) {
                this.undoarr = key;
                this.$firebaseRefs.tasks.child(key).remove();
                this.delete_Dialog = true;
            },
             save(saveTask) {

                 this.$firebaseRefs.tasks.push(saveTask)
                 this.snack_created = true;
              },
             completeTask(task) {
                this.$firebaseRefs.tasks.child(task['.key']).update({
                done: true
               });
             },
             updateTask(task){
         
               this.$firebaseRefs.tasks.child(task['.key']).update({
               title: task.title,
               details: task.details,
            });
           },
           undo() {
                this.delete_Dialog = false;
                this.$firebaseRefs.tasks.child(this.undoarr['.key']).push({
                            title: this.undoarr.title,
                            details: this.undoarr.details
                           });
           }
           

       
      },
         computed: {
             getAll() {
             return this.tasks.length;
       },
            completedResult() {
            return this.tasks.filter(item => item.done).length;
      },
           progressResult() {
           return this.tasks.filter(item => !item.done).length;
     },
           completedAll() {
           return this.tasks.filter(item => item.done);
     },
           progressAll() {
        return this.tasks.filter(item => !item.done);
    }
  }
    }
</script>

<style scoped>

</style>