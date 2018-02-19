<template>
  <div>
    <v-container color="blue-grey lighten-5" grid-list-md>
      <v-layout row wrap>
        <contact-card
          v-for='contact in contacts' :key="contact.id" 
          :contact="contact"
          @delete="delContact"
          @edit="editContact"
          >
        </contact-card>
      </v-layout>
    </v-container>

    <v-dialog
      v-model="showForm"
      fullscreen
      transition="dialog-bottom-transition"
      :overlay="false"
      scrollable
      >
      <v-card tile>
        <v-toolbar card dark color="red lighten-2">
          <v-btn icon @click.native="showForm = false, clear()" dark>
            <v-icon>close</v-icon>
          </v-btn>
          <v-toolbar-title>Contact</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn dark flat @click.native="saveContact()" :disabled="!valid">Save</v-btn>
          </v-toolbar-items>
        
        </v-toolbar>

        <v-card-text>
          <v-flex xs12 md8 lg6 mx-auto>
            <v-form v-model="valid" ref="form" lazy-validation>
              <v-text-field
                color="red lighten-2"
                label="Firt Name"
                v-model="contact.firstName"
                :counter="10"
                :rules="nameRules"
                required
              ></v-text-field>

              <v-text-field
                color="red lighten-2"          
                label="Last Name"
                v-model="contact.lastName"
                :rules="nameRules"
                :counter="10"
              ></v-text-field>

              <v-text-field
                color="red lighten-2"          
                label="Phone Number"
                pattern="^\+?[+]([0-9]{2})[ ][(]([0-9]{2})[)][ ]?([0-9]{5})[-. ]([0-9]{4})$"
                v-model="contact.phoneNumber"
                :rules="phoneRules"
                required
              ></v-text-field>

              <v-text-field
                color="red lighten-2"           
                label="E-Mail"
                v-model="contact.email"
                :rules="emailRules"
              ></v-text-field>

            </v-form>
          </v-flex>
        </v-card-text>

        <div style="flex: 1 1 auto;"/>
      </v-card>
    </v-dialog>

    <v-btn
      @click.native="showForm = true, clear()"
      fixed
      dark
      fab
      bottom
      right
      color="red lighten-2">
      <v-icon>add</v-icon>
    </v-btn>
  </div>
    
</template>


<script>
import contactCard from './ContactCard.vue'

export default {
  data: () => ({
    api: 'http://127.0.0.1:3000',
    contact: {},
    contacts: [],
    showForm: false,
    valid: false,
    edit: false,
    nameRules: [
      v => (v && v.length <= 10) || 'Name must be less than 10 characters'
    ],
    emailRules: [
      v => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid: email@mail.com'
    ],
    phoneRules: [
      v => !!v || 'Phone number is required',
      v => /^\+?[+]([0-9]{2})[ ]?[(]([0-9]{2})[)][ ]?([0-9]{5})[-. ]([0-9]{4})$/.test(v) || 'The phone number must to be valid: +xx (xx) xxxxx-xxxx'
    ]
  }),
  methods: {
    getContacts () {
      this.contact = {}
      this.$http.get(this.api + '/contacts')
      .then(res => {
        this.contacts = res.body.contacts
      }).then(err => console.log(err))
      .finally(() => {
        this.clear()
      })
    },
    delContact (id) {
      this.$http.delete(this.api + '/contacts/' + id)
      .then(err => console.log(err))
      .finally(() => {
        this.getContacts()
        this.clear()
      })
    },
    editContact (contact) {
      this.showForm = true
      this.edit = true
      this.contact = contact
    },
    saveContact () {
      if (this.$refs.form.validate()) {
        this.showForm = false
        if (!this.edit) {
          this.$http.post(this.api + '/contacts', this.contact)
            .then(res => null)
            .then(err => console.log(err))
            .finally(() => {
              this.getContacts()
              this.clear()
            })
        } else {
          this.updateContact()
        }
      }
    },
    updateContact () {
      if (this.$refs.form.validate()) {
        this.$http.put(this.api + '/contacts/' + this.contact.id, this.contact)
          .then(res => null)
          .then(err => console.log(err))
          .finally(() => {
            this.getContacts()
            this.clear()
          })
      }
    },
    clear () {
      this.edit = false
      this.contact = {}
      this.$refs.form.reset()
    }
  },
  created () {
    this.getContacts()
  },
  components: {
    contactCard
  }
}
</script>


