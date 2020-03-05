<template>
  <div id="app">
    <Header msg="Header"/>
    <transition   
      name="showAnimat" 
      appear 
      enter-active-class="animated bounceIn"
      leave-active-class="animated bounceOut"
      mode="out-in"
    >
      <div class="" @wheel="wheel1" v-if="wheelPage1" key="sucess1">
        <PageOne/>
      </div>
      <div class="" @wheel="wheel2" v-if="wheelPage2" key="sucess2">
        <PageTwo/>
      </div>
      <div class="" @wheel="wheel3" v-if="wheelPage3" key="sucess3">
        <PageThree/>
      </div>
    </transition>
    
  </div>
</template>

<script>
import Header from './components/Header'
import PageOne from './components/PageOne'
import PageTwo from './components/PageTwo'
import PageThree from './components/PageThree'


export default {
  name: 'App',
  data: () => ({
    wheelPage1: true,
    wheelPage2: false,
    wheelPage3: false
  }),
  components: {
    Header,
    PageOne,
    PageTwo,
    PageThree
  },
  methods: {
  	wheel1: function(ev){
    	if (ev.deltaY > 0) {
        this.wheelPage1 = false
        this.wheelPage2 = true
      }
    },
    wheel2: function(ev){
    	if (ev.deltaY > 0) {
        this.wheelPage2 = false
        this.wheelPage3 = true
      }
      if (ev.deltaY < 0) {
        this.wheelPage2 = false
        this.wheelPage1 = true
      }
    },
    wheel3: function(ev){
    	// if (ev.deltaY > 0) {
      //   this.wheelPage2 = false
      //   this.wheelPage3 = true
      // }
      if (ev.deltaY < 0) {
        this.wheelPage3 = false
        this.wheelPage2 = true
      }
    }
  }
}
</script>
