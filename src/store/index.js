import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    list: []
  },
  mutations: {
    setList (state, param) {
      state.list = param
    }
  },
  actions: {
    fetchList (store) {
      axios.get('https://newsapi.org/v2/everything?q=bitcoin&apiKey=99da639dc1ce4117912c24440c9ecf6d').then((response) => {
        store.commit('setList', response.data.results)
      })
    }
  },
  modules: {
  }
})
