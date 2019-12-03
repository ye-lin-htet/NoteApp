<template>
  <v-app>
    <v-app-bar app color="primary" >
       <v-app-bar-nav-icon></v-app-bar-nav-icon>
        
          <v-text-field
            label="Solo"
            placeholder="Search"
            solo
            clearable
          ></v-text-field>
            <v-icon>mdi-magnify</v-icon>
     
     
    </v-app-bar>
    <v-content>
      <list-component></list-component>
    </v-content>
  </v-app>
</template>

<script>
import ListComponent from './components/ListComponent.vue';

export default {
  name: "App",
  components: {
    ListComponent
  },
};
</script>
