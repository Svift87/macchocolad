<template>
  <div id="app">
    <Header msg="Header"/>
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/>     -->
    <PageOne/>
    <!-- <getScroll /> -->
  </div>
</template>

<script>
import Header from './components/Header'
import PageOne from './components/PageOne'


export default {
  name: 'App',
  components: {
    Header,
    PageOne
  }
}
</script>

<style lang="less">
  body {
    background: linear-gradient(to top, #AC87BC, #A3639F);
    min-height: calc(100vh - 80px);
  }
  #app {
    margin-top: 80px;
    
  }
  .container {  
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
  }
</style>
