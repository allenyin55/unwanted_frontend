<!-- The 'body' of the page. -->
<template>
  <div>
    <div class="bars-icon">
      <i class="fa fa-bars fa-4x" aria-hidden="true"></i>
    </div>
    <div class="results-header">
      <h1>Unwanted Data</h1>
    </div>
    <div class="bigbox">
      <div class="scrollbox">
        <div class = "item-box">
          <ul class = "item" v-for = "(key, value) in items">
            <h2>{{key["header"]}}</h2>
            <p>{{key["content"]}}</p>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<!-- The JS and whatever scripts on the page. -->
<script>
export default {
  name: 'results',
  beforeCreate: function () {
    document.body.className = 'results-bg'
  },
  data () {
    return {
      items: [{
        header: 'header x',
        content: 'body x'
      }, {
        header: 'header y',
        content: 'body y'
      }, {
        header: 'header y',
        content: 'body y'
      }, {
        header: 'header y',
        content: 'body y'
      }, {
        header: 'header y',
        content: 'body y'
      }]
    }
  }
}
</script>

<!-- The CSS of the page. -->
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.fa-bars {
  color: white;
}

.bars-icon {
  top: 10px;
  left: 10px;
  position: absolute;
  bottom: 55px;
}

.results-header {
  text-align: center;
  vertical-align: center;
  width: 100%;
  padding: 6px 0px;
  z-index: 0;
}

.results-header h1 {
  color: white;
  font-size: 50px;
}

.circle {
  background-color: red;
  border-radius: 100%;
  width: 20px;
  height: 20px;
  z-index: -2;
  position: absolute;
}

.scrollbox {
  overflow-y: auto;
  width: 25%;
  height: 100%;
  padding-right: 2%;
  text-align: justify;
}

.item-box .item{
  background: linear-gradient(to bottom right, silver, white);
  padding: 3px 0px 1px 5%;
  border-style: solid;
  border-image: linear-gradient(gray, #d4d6d8);
  border-image-slice: 1;
  border-width: 2px;
  border-radius: 5px;
  margin-bottom: 15px;
}
.bigbox {
  background-color: white;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 60%;
  z-index: -1;
  padding: 30px;
  padding-left: 10%;
  padding-right: 10%;
  box-sizing: border-box;
}
</style>
