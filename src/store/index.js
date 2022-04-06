import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

const dataPers = createPersistedState({
  state: ['listBerita', 'OneBerita']
})
export default new Vuex.Store({
  plugins: [dataPers],
  state: {
    listBerita: [],
    OneBerita: []
  },
  getters: {},
  mutations: {
    setBerita (state, payload) {
      console.log(payload)
      state.listBerita = payload.articles
    },
    setOneBerita (state, payload) {
      console.log(payload)
      state.oneBerita = state.listBerita.find(
        (item) =>
          item.title
            .toLowerCase()
            .replace(/\s+/g, '-')
            .replace(/&/g, '-and-')
            .replace(/--/g, '-') === payload
      )
    }
  },
  actions: {
    fetchListBerita (store) {
      axios
        .get(
          'https://newsapi.org/v2/top-headlines?country=de&category=business&apiKey=99da639dc1ce4117912c24440c9ecf6d'
        )
        .then((response) => {
          store.commit('setBerita', response.data)
        })
    },
    getBerita (store, slug) {
      store.commit('setOneBerita', slug)
    }
  },
  modules: {}
})
