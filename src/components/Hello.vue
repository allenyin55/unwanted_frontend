<template>
  <div class="hello">
    <div id="header" v-bind:style="styleObject">
      <icon scale="5" name="bars" :style="{ margin: 30 + 'px'}"></icon>
    </div>
    <div class="text_area">
      <h1 :style="{ fontSize: '55px'}">{{ msg }}</h1>
      <span>
        <div v-bind:style="inputStyle">
          <icon name="user" scale='3'></icon>
          <input type="text" v-model="userInput" v-on:keyup.enter="postRequest()">
        </div>
        <button v-bind:style="buttonStyle" 
                v-on:click="postRequest()"> 
          <icon name="arrow-right" scale='3'></icon>
        </button>
      </span>
    </div>
  </div>
</template>

<script>
import router from '../router'

export default {
  name: 'hello',
  data () {
    return {
      errors: [],
      userInput: '',
      msg: 'Reassurance for everyone',
      styleObject: {
        backgroundImage: 'url(\'' + require('../assets/1.jpg') + '\')'
      },
      inputStyle: {
        display: 'inline-block',
        position: 'relative',
        backgroundColor: '#acd5e3',
        borderRadius: '20px',
        padding: '15px'
      },
      buttonStyle: {
        padding: '23px 24px',
        backgroundColor: '#8dd47f',
        borderColor: '#8dd47f',
        borderRadius: '17px',
        marginLeft: '10px'
      }
    }
  },
  methods: {
    postRequest () {
      console.log('request send: ', this.userInput)
      this.$socket.emit('data', {
        username: this.userInput
      })
      router.push('result')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.text_area {
  text-align: center;
}

#header{
  height: 450px;
  width: 100%;
  background-size: cover;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

input {
  border: 0;
  outline: 0;
  background: transparent;
  border-bottom: 3px solid black;
  width: 400px;
  padding-left: 10px;
}

input[type="text"] {
  font-size:45px;
}

button{
  outline: none;
  border: none;
}

button:active{
  background-color: #006400;
}

</style>