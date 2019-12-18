import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import { firestorePlugin } from 'vuefire'
import ManageView from './views/ManageView'
import TVView from './views/TVView'

Vue.config.productionTip = false
Vue.config.ignoredElements = ['webview']


const serialize = (doc) => {
  // add id to the documents
  return Object.assign({ id: doc.id, }, doc.data())
}

Vue.use(firestorePlugin, { serialize })
Vue.use(VueRouter)

const routes = [
  { path: '/manage', component: ManageView, props: true },
  { path: '/tv', component: TVView, props: true, alias: '/' },
]

const router = new VueRouter({
  routes
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
