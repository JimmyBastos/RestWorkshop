<template>
  <div>
  
    <v-navigation-drawer
      color="indigo darken-3"
      persistent
      :clipped="clipped"
      v-model="drawer"
      enable-resize-watcher
      app >
      <v-list>
        <v-list-tile
          value="true"
          v-for="(item, i) in items"
          :key="i"
            >

          <v-list-tile-action>
            <v-icon v-html="item.icon"></v-icon>
          </v-list-tile-action>

          <v-list-tile-content>
            <v-list-tile-title v-text="item.title"></v-list-tile-title>
          </v-list-tile-content>

        </v-list-tile>

      </v-list>

    </v-navigation-drawer>
     <v-toolbar
      app
      :clipped-left="clipped"
      color="red lighten-2"
      >

      <v-toolbar-side-icon class="white--text" @click.stop="drawer = !drawer"></v-toolbar-side-icon>
  
      <v-toolbar-title class="white--text" v-text="title" ></v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>
  </div>
</template>

<script>
export default {
  data () {
    return {
      clipped: false,
      drawer: false,
      fixed: true,
      items: [{}],
      title: 'Vue Contacts'
    }
  },
  name: 'nav-bar'
}
</script>
