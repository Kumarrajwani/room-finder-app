<template>
  <v-card>
        <v-card-title class="headline">
          RoomFinder Frontend
        </v-card-title>
        <v-card-text>
          <p>Gonna be amazing</p>
          
          
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn
            color="primary"
            nuxt
            @click.native="greet"
          >
            Say Hi
          </v-btn>
        </v-card-actions>
      </v-card>
</template>

<script>
export default {
    name: "Home",
    data: () => {
        return{
            demo: 1
        }
    }, 
    methods: {
        greet(){
            console.log("hi");
        },
        testme(){
            return this.demo;
        }
    }

}
</script>

<style>

</style>