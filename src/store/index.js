import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    tweets: [],
    insts: [],
    links: []
  },
  mutations: {
    addTweets (state, data) {
      state.tweets.push(data)
    },
    addInsts (state, data) {
      state.insts.push(data)
    },
    addLinks (state, data) {
      let arr = [
        {name: 'facebook', data: data.facebook[0]},
        {name: 'github', data: data.github[0]},
        {name: 'devpost', data: data.devpost[0]},
        {name: 'instagram', data: data.instagram[0]},
        {name: 'twitter', data: data.twitter[0]}
      ]
      state.links.push(...arr)
    }
  }
})

export default store
