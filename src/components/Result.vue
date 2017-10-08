<template>
  <div class="result" v-bind:style="styleObject">
    <div id="header">
      <icon scale="5" name="bars" :style="{ margin: 20 + 'px', color: 'white'}"></icon>
    </div>
    <div v-bind:style="textArea">
      <div>Unwanted Data</div>
      <container>
        <grid>
          <animated-bounce>
            <grid-item size="1/2">
              <icon class="aweIcon" scale="1.5" name="twitter"></icon>
            </grid-item>
          </animated-bounce>
          <grid-item size="1/3">
            <icon class="aweIcon" scale="1.5" name="facebook"></icon>
          </grid-item>
          <grid-item size="1/2">
            <icon class="aweIcon" scale="1.5" name="instagram"></icon>
          </grid-item>
        </grid>
      </container>
      <div id="list-demo">
        <transition-group name="list" tag="p">
          <p v-for="item in items" v-bind:key="item" class="list-item">
            {{ item }}
          </p>
        </transition-group>
      </div>
      <div id="list-demo2">
        <transition-group name="list2" tag="p">
          <span v-for="image in images" v-bind:key="image" class="list-item">
            <image src={{ image }} />
          </span>
        </transition-group>
      </div>
    </div>
  </div>
</template>

<script>
import store from '../store'

export default {
  name: 'Result',
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
        data.data.forEach(function (element) {
          store.commit('addInsts', data.data)
        })
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
}

.list-item {
  display: inline-block;
  margin-right: 10px;
}
.list-enter-active, .list-leave-active {
  transition: all 1s;
}
.list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(30px);
}

</style>

