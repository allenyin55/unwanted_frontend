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
              <div v-if="items.length == 0">
                <icon name='spinner' class="spinner"></icon>
              </div>
              <div class="theBox" v-else>
                <transition-group appear name="list" tag="p" class="content">
                  <p v-for="item in items" v-bind:key="item" class="list-item">
                    {{ item }}
                  </p>
                </transition-group appear>
              </div>
            </grid-item>
          <grid-item size="1/3">
            <icon class="aweIcon" scale="1.5" name="link"></icon>
            <div v-if="links.length == 0">
              <icon name='spinner' class="spinner"></icon>
            </div>
            <div class="theBox" v-else>
              <transition-group appear name="list2" tag="p" class="content">
                <li v-for="link in links" 
                    v-if="link.data !== undefined" 
                    v-bind:key="link"
                    :style="{ paddingBottom: '10x'}"
                    class="list-item">
                  <a :href="link.data.url" :style="{ textDecoration: 'none'}">
                    <icon :name="link.name" :style="{ padding: '0 0 5px 0'}"></icon>
                    {{ link.data.display }}
                  </a>
                </li>
              </transition-group appear>
            </div>
          </grid-item>
          <grid-item size="1/2">
            <icon class="aweIcon" scale="1.5" name="instagram"></icon>
            <div v-if="images.length == 0">
              <icon name='spinner' class="spinner"></icon>
            </div>
            <div class="theBox" v-else>
              <transition-group name="list3" tag="p" class="content">
                <li v-for="image in images" v-bind:key="image" class="list-item">
                  <img :src="image" alt="">
                </li>
            </transition-group>
            </div>
          </grid-item>
        </grid>
      </container>
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
      links: store.state.links,
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
      } else if (data.type === 'links') {
        store.commit('addLinks', data.links)
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

.aweIcon:hover {
    -webkit-animation: bounce 1s;
    animation: bounce 1s;
}


#list-demo{
  text-align: left;
}

p, a{
  color: black;
  font-size: 20px;
  padding-bottom: 10px; 
}

.theBox{
  text-align: left;
  width:260px;
  height: 400px;
  margin: 10px;
  overflow-y: scroll;
  background-color: #d6d6d6;
  border-radius: 22px;
  padding: 0 15px 0 15px;
}

img{
  height: 165px;
  width: 185px;
  padding-left: 50px;
}

p .list-item{
  width: 100%;
  overflow-wrap: break-word;
  border-top: 1px solid transparent; 
  padding: 10px 0 0 10px;
  box-shadow: 0 21px 0 -20px #d6d6d6;
  box-sizing: border-box;
}

.list-item {
  margin-right: 10px;
  list-style: none;
  position: relative;
  background-color: white
}

.list-item:hover {
  transform: scale3d(1.05, 1.05, 1.05);
}

.list-enter-active, .list-leave-active {
  transition: all 1s;
}
.list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(30px);
}

::-webkit-scrollbar {
display: none;
}

.spinner{
  margin-top: 100px;
  color: black;
  -webkit-animation:spin 3s linear infinite;
  -moz-animation:spin 3s linear infinite;
  animation:spin 3s linear infinite;
}

@-moz-keyframes spin { 100% { -moz-transform: rotate(360deg); } }
@-webkit-keyframes spin { 100% { -webkit-transform: rotate(360deg); } }
@keyframes spin { 100% { -webkit-transform: rotate(360deg); transform:rotate(360deg); } }
</style>

