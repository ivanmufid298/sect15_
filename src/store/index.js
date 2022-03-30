import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    list: []
  },
  mutations: {
    setList (state, payload) {
      console.log(payload)
      state.list = payload
    }
  },
  actions: {
    fetchList (store) {
      axios
        .get('https://newsapi.org/v2/everything?q=apple&from=2022-03-29&to=2022-03-29&sortBy=popularity&apiKey=99da639dc1ce4117912c24440c9ecf6d')
        .then((response) => {
          store.commit('setList', response.data)
          console.log('response', response)
        })
    }
  },
  modules: {
  }
})
