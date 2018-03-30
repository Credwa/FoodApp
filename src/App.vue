<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: 'App',

}
</script>
<style>
/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */

.click-to-upload {
  font-size: 10pt;
  color: green;
  display:flex;
}

.upload-iframe {
  border: none;
}

.center-pic-upload {
  display: flex;
  flex-direction: column;
  align-items: center;
}

</style>
