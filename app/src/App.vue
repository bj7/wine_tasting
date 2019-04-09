<template>
  <v-app>
    <v-toolbar app class="deep-purple lighten-5">
      <v-toolbar-title class="headline text-uppercase">
        <span class="font-weight-light">WINE TASTING</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        flat
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
      >
        <!-- <span class="mr-2">Latest Release</span> -->
      </v-btn>
    </v-toolbar>

    <v-content>
      <!-- <HelloWorld/> -->
      <TastingNote/>
    </v-content>
  </v-app>
</template>

<script>
// import HelloWorld from './components/HelloWorld'
import TastingNote from './components/TastingNote'

export default {
  name: 'App',
  components: {
    // HelloWorld,
    TastingNote
  },
  data () {
    return {
      //
    }
  }
}
</script>
