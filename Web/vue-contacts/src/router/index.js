import Vue from 'vue'
import Router from 'vue-router'
import Contacts from '@/components/ContactView'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Contact',
      component: Contacts
    }
  ]
})
