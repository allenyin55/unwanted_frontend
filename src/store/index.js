import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    result: []
  },
  mutations: {
    addNewResult (state, data) {
      state.result = data
    }
  }
})

export default store
