<template>
<div>
  <div class="cookies__container" @mousemove="move" @mouseout="out">
    <div class="cookies__circular left"></div>
    <div class="cookies__circular right"></div>
    <div class="cookies__progress_bar">
      <div class="cookies__progress_bar__active"></div>
    </div>
    <img 
      src="../img/Hand.png" 
      alt="" 
      class="hand"
    >
    <div class="cookies__zone cookies__left-zone"></div>
    <div class="cookies__zone cookies__right-zone"></div>
    <div class="title_container container">
      <h1 class="title_page">Узнай что тебя ждет вместе с MacChocolate</h1>
      <p class="title_discription">Выбери печенье с предсказанием</p>      
    </div>
    <div class="cookies__block" ref="scrollBox">
      <div class="cookies__scroling">
        <p style="display: none">{{ windowWidth }}</p>
        <div
          class="cookies"
          v-for="(item, index) in allText"
          :key="item.id"
          :data-text="item.text"
          @click="cookiesTextOn(index)"
          ref="tester"
        >
          <img :src="item.images" alt class="cookies__imges">          
        </div>        
        <img src="@/img/Group 47.png" alt class="cookies__product"/>
      </div>
    </div>    
  </div>
  <div 
    v-for="item in allText"
    :key="item.id"
    class="cookies__prediction" 
    ref="prediction"
  >
    <p>{{item.text}}</p>
  </div>
  
  <transition
    name="showAnimat"                         
    enter-active-class="animated fadeIn"
    leave-active-class="animated fadeOut"
  >
    <div class="popap" v-if="popapShow">
      <div class="popap__bg" @click="popapAnShow"></div>    
      <div class="popap__container">
        <div class="closed" @click="popapAnShow">
          <i class="fas fa-times"></i>
        </div>
        <div class="popap__text"></div>
        <!-- <div class="popap__line"></div> -->
        <div class="popap__share">
          <p class="popap__share__text">Поделиться</p>
          <div class="popap__share__icon_container">
            <div class="popap__share__icon"><i class="fab fa-vk"></i></div>
            <div class="popap__share__icon"><i class="fab fa-twitter"></i></div>
            <div class="popap__share__icon"><i class="fab fa-instagram"></i></div>
            <div class="popap__share__icon"><i class="fab fa-odnoklassniki"></i></div>
            <div class="popap__share__icon"><i class="fab fa-facebook-f"></i></div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</div>
  
</template>

<script>
export default {
  name: "PageOne",
  data: () => ({
    scroll: 0,
    bHeight: window.innerHeight - 100,
    windowWidth: window.innerWidth,
    popapShow: false,
    textPopap: '',
    handPositionX: 0,
    handPositionY: 0,
    activeIndex: 0,
    allText: [
      {
        text: "Помни: все, что ты можешь вообразить — реально!1",
        images: require('@/img/c1(1).png')
      },
      {
        text: "Помни: все, что ты можешь вообразить — реально!2",
        images: require('@/img/c1.png')
      },
      {
        text: "Помни: все, что ты можешь вообразить — реально!3",
        images: require('@/img/c3.png')
      },
      {
        text: "Помни: все, что ты можешь вообразить — реально!4",
        images: require('@/img/c1(1).png')
      },
      {
        text: "Помни: все, что ты можешь вообразить — реально!5",
        images: require('@/img/c1.png')
      },
      {
        text: "Помни: все, что ты можешь вообразить — реально!6",
        images: require('@/img/c3.png')
      },
      {
        text: "Помни: все, что ты можешь вообразить — реально!7",
        images: require('@/img/c1(1).png')
      },
      {
        text: "Помни: все, что ты можешь вообразить — реально!8",
        images: require('@/img/c1.png')
      },
      {
        text: "Помни: все, что ты можешь вообразить — реально!9",
        images: require('@/img/c3.png')
      },
      {
        text: "Помни: все, что ты можешь вообразить — реально!10",
        images: require('@/img/c1(1).png')
      }
    ]
  }),
  mounted: function () {
    let arr = []
    let diapazon = 2560 / this.allText.length

    setTimeout(() => {
      for (let i = 0; i < this.$refs.tester.length; i++) {
        let a = Math.round(0 - 0.5 + Math.random() * (this.bHeight - 400))
        let b = Math.round(0 - 0.5 + Math.random() * (diapazon - 100)) + (diapazon * i)
        let c = Math.round(0 - 0.5 + Math.random() * 150) + 100
        let obj = {a, b}
        arr.push(obj)
        this.$refs.tester[i].style.top = a + 'px'
        this.$refs.tester[i].style.left = b + 'px'
        this.$refs.tester[i].style.width = c + 'px'
        this.$refs.tester[i].style.height = c + 'px'

        // this.$refs.prediction[i].style.top = a + c / 2 + 'px' 
        // this.$refs.prediction[i].style.left = b + c / 2 + 'px'
      }
    }, 0);

    setTimeout(() => {
      document.querySelector('.cookies__progress_bar__active').style.width = Math.round(document.querySelector('.cookies__block').offsetWidth * 100 / document.querySelector('.cookies__scroling').offsetWidth) + '%'
      document.querySelector('.cookies__progress_bar__active').style.left = Math.round(document.querySelector('.cookies__block').scrollLeft * 100 / document.querySelector('.cookies__scroling').offsetWidth) + '%' 
    }, 0);

    this.$refs.scrollBox.scrollLeft = this.$refs.scrollBox.scrollWidth / 2 - window.innerWidth / 2
    window.onresize = () => {
      this.windowWidth = window.innerWidth

      document.querySelector('.cookies__progress_bar__active').style.width = Math.round(document.querySelector('.cookies__block').offsetWidth * 100 / document.querySelector('.cookies__scroling').offsetWidth) + '%'
      document.querySelector('.cookies__progress_bar__active').style.left = Math.round(document.querySelector('.cookies__block').scrollLeft * 100 / document.querySelector('.cookies__scroling').offsetWidth) + '%'
      
      this.bHeight = window.innerHeight - 100   
      this.$refs.scrollBox.scrollLeft = this.$refs.scrollBox.scrollWidth / 2 - window.innerWidth / 2
    }
    
    let scrollRightInterval
    let scrollLeftInterval
    let a = 2
    let b = 0

    let cookiesLeftZone = document.querySelector('.cookies__left-zone')
    let cookiesRightZone = document.querySelector('.cookies__right-zone')

    cookiesLeftZone.addEventListener('mouseover', function() {
      document.querySelector('.title_container').classList.add('hide')
      scrollRightInterval = setInterval(function() {   
        if (a <= 10) {
          a += 0.1          
        }
        document.querySelector('.cookies__block').scrollLeft -= a
        document.querySelector('.cookies__progress_bar__active').style.left = Math.round(document.querySelector('.cookies__block').scrollLeft * 100 / document.querySelector('.cookies__scroling').offsetWidth) + '%' 
        if (b <= 64 && document.querySelector('.cookies__block').scrollLeft == 0) {
          b += 1
        }
        document.querySelector('.cookies__circular.left').style.width = b + 'px'
      }, 1)
    })
    cookiesLeftZone.addEventListener('mouseout', function() {
      a = 2
      b = 0
      document.querySelector('.cookies__circular.left').style.width = b + 'px'
      clearInterval(scrollRightInterval)
    })
    cookiesRightZone.addEventListener('mouseover', function() {
      document.querySelector('.title_container').classList.add('hide')
      scrollLeftInterval = setInterval(function() {
        if (a <= 10) {
          a += 0.1
        }        
        document.querySelector('.cookies__block').scrollLeft += a
        document.querySelector('.cookies__progress_bar__active').style.left = Math.round(document.querySelector('.cookies__block').scrollLeft * 100 / document.querySelector('.cookies__scroling').offsetWidth) + '%' 
        if (b <= 64 && document.querySelector('.cookies__block').scrollLeft >= document.querySelector('.cookies__scroling').offsetWidth - document.querySelector('.cookies__block').offsetWidth - 10) {
          b += 1
        } 
        document.querySelector('.cookies__circular.right').style.width = b + 'px'
      }, 1)
    })
    cookiesRightZone.addEventListener('mouseout', function() {
      a = 2
      b = 0
      document.querySelector('.cookies__circular.right').style.width = b + 'px'
      clearInterval(scrollLeftInterval)
    })
  },
  methods: {
    // cookiesTextOn(i) {
    //   this.popapShow = true
    //   this.textPopap = i
    // },    
    move(e) {
      this.handPositionX = e.clientX
      this.handPositionY = e.clientY
      
      document.querySelector('.hand').style.transition = 'none'
      document.querySelector('.hand').style.left = e.clientX - 1235 + 'px'
      document.querySelector('.hand').style.top = e.clientY - 180 + 'px'
      
    },
    out(e) {
      document.querySelector('.hand').style.transition = '0.5s'
      document.querySelector('.hand').style.left = 'calc(50% - '+ document.querySelector('.hand').width / 1.5 +'px)'
      document.querySelector('.hand').style.top = 'calc(50% - '+ document.querySelector('.hand').height / 3 +'px)'
      
    },
    cookiesTextOn(i) {
      this.activeIndex = i
      this.$refs.prediction[this.activeIndex].style.left = this.handPositionX + 'px'
      this.$refs.prediction[this.activeIndex].style.top = this.handPositionY + 'px'

      setTimeout(() => {
        this.$refs.prediction[this.activeIndex].classList.add('center')
      }, 0);
      setTimeout(() => {
        this.$refs.prediction[this.activeIndex].classList.add('turn')
        this.popapShow = true
      }, 1000);
    },
    popapAnShow() {
      this.$refs.prediction[this.activeIndex].classList.remove('turn')
      setTimeout(() => {
        this.$refs.prediction[this.activeIndex].classList.remove('center')
      }, 1000);
      this.popapShow = false
    },
    randomaser(b) {
      if (b== 2) {
        let rand = 0 - 0.5 + Math.random() * (2560 - 100);
        return Math.round(rand) + 'px';
      } else if (b== 1) {
        let rand = 0 - 0.5 + Math.random() * (this.bHeight - 100);
        return Math.round(rand) + 'px';
      }
    },
  },
};
</script>