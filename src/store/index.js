import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    tweets: [],
    insts: []
  },
  mutations: {
    addTweets (state, data) {
      state.tweets.push(data)
    },
    addInsts (state, data) {
      state.insts.push(data)
    }
  }
})

export default store
