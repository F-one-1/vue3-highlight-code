<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <drag-code tag="HelloWorld" :code="currentCode1" suffix="js"/>
  <drag-code tag="HelloWorld" :code="currentCode" suffix="vue"/>
  <hg-code tag="HelloWorld" :code="currentCode" suffix="vue"/>

</template>

<script>


export default {

  name: 'App',
  components: {
  },
  computed: {
    currentCode() { 
      return require('!!text-loader!./components/' + 'HelloWorld' + '.' + 'vue')
    },
    currentCode1() {
      return require('!!text-loader!./' + 'main' + '.' + 'js')
    }
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
