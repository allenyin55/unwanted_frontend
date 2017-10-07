<template>
  <div id="app">
    <div class="circular"
       :style="{ backgroundImage: 'url(' + image + ')' }">
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data: {
   	image: "http://1.bp.blogspot.com/-8PfnHfgrH4I/TylX2v8pTMI/AAAAAAAAJJ4/TICBoSEI57o/s1600/search_by_image_image.png"
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
