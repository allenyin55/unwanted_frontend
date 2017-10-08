<template>
  <div class="result" v-bind:style="styleObject">
    <div id="header">
      <icon scale="5" name="bars" :style="{ margin: 20 + 'px', color: 'white'}"></icon>
    </div>
    <div v-bind:style="textArea">
      <div>Unwanted Data</div>
      <container>
        <grid>
            <grid-item size="1/2">
              <icon class="aweIcon" scale="1.5" name="twitter"></icon>
              <div class="theBox">
                <transition-group name="list" tag="p" class="content">
                  <p v-for="item in items" v-bind:key="item" class="list-item">
                    {{ item }}
                  </p>
                </transition-group>
              </div>
            </grid-item>
          <grid-item size="1/3">
            <icon class="aweIcon" scale="1.5" name="facebook"></icon>
          </grid-item>
          <grid-item size="1/2">
            <icon class="aweIcon" scale="1.5" name="instagram"></icon>
            <div class="theBox">
              <transition-group name="list2" tag="p" class="content">
                <li v-for="image in images" v-bind:key="image" class="list-item">
                  <img :src="image" alt="">
                </li>
            </transition-group>
            </div>
          </grid-item>
        </grid>
      </container>
      <div id="list-demo">

      </div>
      <div id="list-demo2">
        
      </div>
    </div>
  </div>
</template>

<script>
import store from '../store'

export default {
  name: 'Result',
  methods: {
    add: function () {
      this.images.splice(1, 0, 1)
    },
    remove: function () {
      this.images.splice(2, 1)
    }
  },
  data () {
    return {
      items: store.state.tweets,
      images: store.state.insts,
      isConnected: false,
      socketMessage: '',
      msg: 'Unwanted Data',
      styleObject: {
        backgroundColor: '#8bc7d9',
        height: '285px',
        width: '100%'
      },
      textArea: {
        textAlign: 'center',
        color: 'White',
        fontSize: '44px'
      }
    }
  },
  sockets: {
    connect () {
      // Fired when the socket connects.
      console.log('yay')
      this.isConnected = true
    },

    disconnect () {
      this.isConnected = false
    },

    // Fired when the server sends something on the "messageChannel" channel.
    messageChannel (data) {
      console.log('server says', data)
      if (data.type === 'twitter') {
        data.data.forEach(function (element) {
          store.commit('addTweets', element.text)
        }, this)
      } else if (data.type === 'instagram') {
        store.commit('addInsts', data.instagram.display_src)
      }
      this.socketMessage = data
    }
  }
}
</script>

<style scoped>
.aweIcon{
  margin-top:60px;
  background-color: #8bc7d9;
  border: 13px solid white;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  padding: 15px;
}

button:active{
  background-color: teal;
}

#list-demo{
  text-align: left;
}

p{
  color: black;
  font-size: 20px;
  padding-bottom: 10px; 
}

.theBox{
  text-align: left;
  width:300px;
  height: 400px;
  margin: 10px;
  overflow-y: scroll;
  background-color: #d6d6d6;
  border-radius: 22px;
  padding: 0 15px 0 15px;
}

.content{
  background-color: white;
}

img{
  height: 165px;
  width: 165px;
}

p .list-item{
  width: 100%;
  overflow-wrap: break-word;
  border-bottom: 1px solid blue; 
}

.list-item {
  margin-right: 10px;
  list-style: none;
  position: relative;
}
.list-enter-active, .list-leave-active {
  transition: all 1s;
}
.list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(30px);
}
</style>

