<template>
  <div class="hello">
    <div id="header" v-bind:style="styleObject">
      <icon scale="5" name="bars" :style="{ margin: 30 + 'px'}"></icon>
    </div>
    <div class="text_area">
      <h1 :style="{ fontSize: '55px'}">{{ msg }}</h1>
      <span>
        <div v-bind:style="inputStyle">
          <icon name="user" scale='3' v-bind:style="iconStyle"></icon>
          <input type="text" v-bind:style="textStyle">
        </div>
        <button v-bind:style="buttonStyle" v-on:click="postRequest">
          <icon name="arrow-right" scale='3'></icon>
        </button>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
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
        padding: '18px 21px',
        backgroundColor: '#8dd47f',
        borderColor: '#8dd47f',
        borderRadius: '20px'
      }
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

</style>
