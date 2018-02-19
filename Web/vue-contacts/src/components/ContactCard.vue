<template>
  <v-flex xs12 md6 lg4>
      <v-container>
        <v-card color="white">
        
          <v-card-title primary-title>
            <div>
              <div class="headline blue-grey--text" >
                <v-icon left x-large color="red lighten-2">account_circle</v-icon>
                {{contact.firstName + ' ' + contact.lastName }} 
              </div>
            </div>
          </v-card-title>
        
          <v-card-actions>
            <v-btn flat @click="$emit('edit', contact)" color="blue-grey darken-1">
              <v-icon left>edit</v-icon> Edit
            </v-btn>
            <v-btn flat @click="$emit('delete', contact.id)" color="orange lithen-1">
              <v-icon left>warning</v-icon> Delete
            </v-btn>
            <v-spacer> </v-spacer>
            <v-btn icon @click.native="show = !show">
              <v-icon>{{ show ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</v-icon>
            </v-btn>
          </v-card-actions>

          <v-slide-y-transition >
            <v-card-text v-show="show">
              <v-list>
                <!-- phone number -->
                <v-list-tile>
                  <v-list-tile-action>
                    <v-icon color="blue-grey darken-1">phone</v-icon>
                  </v-list-tile-action>

                  <v-list-tile-content>
                    <v-list-tile-title>{{contact.phoneNumber}}</v-list-tile-title>
                  </v-list-tile-content>
                </v-list-tile>
                <v-divider inset></v-divider>
                <!-- email  -->
                <v-list-tile>
                  <v-list-tile-action>
                    <v-icon color="blue-grey darken-1">mail</v-icon>
                  </v-list-tile-action>

                  <v-list-tile-content>
                    <v-list-tile-title>{{contact.email}}</v-list-tile-title>
                  </v-list-tile-content>
                </v-list-tile>
                <v-divider inset></v-divider>
              </v-list>
            </v-card-text>
          </v-slide-y-transition>
  
        </v-card>
      </v-container>
    </v-flex>
</template>

<script>
export default {
  props: ['contact'],
  name: 'contact-card',
  data () {
    return {
      show: false
    }
  },
  methods: {
  }
}
</script>
