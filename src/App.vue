<template>
  <div id="app">
    <router-view :urls=urls :addUrl="addUrl" :lastUrl="lastUrl"></router-view>
  </div>
</template>

<script>
import firebase from 'firebase/app'
import 'firebase/firestore'

const db = firebase
  .initializeApp({ projectId: process.env.VUE_APP_FIREBASE_PROJECT }).firestore()

export default {
  name: 'app',
  data: () => ({
      urls: []
  }),
  firestore: {
    urls: db.collection('urls').orderBy('createdAt'),
  },
  methods: {
    addUrl(url) {
      db.collection('urls').add({
        url,
        createdAt: firebase.firestore.FieldValue.serverTimestamp()
      }).catch(e => {
        // eslint-disable-next-line no-console
        console.error(e);
      })
    }
  },
  computed: {
    lastUrl() {
        return this.urls && this.urls.length && this.urls[this.urls.length - 1].url || ''
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
