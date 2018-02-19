<template>
  <v-app>

    <nav-bar></nav-bar>

    <v-content>
      <router-view/>
    </v-content>
   
    <footer></footer>

  </v-app>
</template>

<script>
import NavBar from './components/NavBar.vue'
import Footer from './components/Footer.vue'

export default {
  data () {
    return {
      fixed: true
    }
  },
  components: {
    NavBar,
    Footer
  },
  name: 'App'
}
</script>
