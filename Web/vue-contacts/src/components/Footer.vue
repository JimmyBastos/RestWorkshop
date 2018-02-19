<template>
  <v-footer :fixed="fixed" app>
    <span> 
      Released under the 
      <a href="https://opensource.org/licenses/MIT" target="_blank">MIT License</a> 
      Copyright
      <a class="is--block" href="http://github.com/jimmybastos" target="_blank">Jimmy Bastos</a> &copy; 2018
    </span>
  </v-footer>
</template>

<script>
export default {
  data () {
    return {
      fixed: true
    }
  },
  name: 'footer'
}
</script>
