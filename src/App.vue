<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <drag-code tag="HelloWorld" :code="currentCode1" suffix="js"/>
  <drag-code tag="HelloWorld" :code="currentCode" suffix="vue"/>
  <hg-code tag="HelloWorld" :code="currentCode" suffix="vue"/>

</template>

<script>

import func from 'text-loader'
import main from './main.js'
export default {

  name: 'App',
  components: {
  },
  computed: {
    currentCode() { 
      // console.log('func',func)
      return require('!!text-loader!./components/' + 'HelloWorld' + '.' + 'vue')
    },
    currentCode1() {
      console.log('!!text-loader!')
      const s1 = func(require('./'+'main' + '.' + 'js'))
      console.log(require('./'+'main' + '.' + 'js'),s1)
      console.log('main.js',main)
      // const s2 = require(''+'./' + 'main' + '.' + 'js')
      // console.log(s2)
      console.log(require('!!text-loader!./' + 'main' + '.' + 'js'))
      return require('!!text-loader!./' + 'main' + '.' + 'js')
    }
  },
//   module.exports = function (content) {
//   this.cacheable && this.cacheable();
//   this.value = content;
//   console.log('text-loader')
//   console.log('content',content)
//   console.log("module.exports = " + JSON.stringify(content))
//   return "module.exports = " + JSON.stringify(content);
// }

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
