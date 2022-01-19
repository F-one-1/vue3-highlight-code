<template>
  <img alt="Vue logo" src="./assets/logo.png">
  
  <mg-code tag="HelloWorld"/>
  <mg-code tag="index"  suffix='js'>ß
  </mg-code>
  <HelloWorld msg="Welcome to Your Vue.js App"/>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
</template>

<script>
import HelloWorld from '../package/components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style scoped>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
