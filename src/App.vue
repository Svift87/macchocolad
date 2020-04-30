<template>
  <div id="app">
    <!-- <Header msg="Header"/> -->
    <transition
        name="showAnimat"                         
        enter-active-class="animated fadeIn"
        leave-active-class="animated fadeOut"
    >
      <div class="preloader">
        <img class="preloader__img" src="@/img/logo.png" alt="">
        <div class="preloader__line">
          <div 
              class="preloader__line__active"
          ></div>
        </div>
        <div style="position: absolute; opacity: 0" v-for="img in images" :key="img.id">
          <img :src="img.imgPreload" alt="">
        </div>
      </div>
    </transition>
    <div class="header">
      <transition 
          name="showAnimat" 
          enter-active-class="animated fadeIn"
          leave-active-class="animated fadeOut"
      >
        <div class="background_menu" v-if="show" @click="show = false"></div>
      </transition>
      <div class="container">
        <div class="header__left">
          <a class="header__logo_container" href="/">
            <img src="@/img/logo.png" alt="" class="header__logo">
          </a>
          <div class="header__select">
            <select>
              <option value="1">Ru</option>
              <option value="2">En</option>
            </select>
          </div>
        </div>
        <div class="header__right">
          <div class="header__btn__nav_container">
            <button class="header__btn__nav" @click="wheelPageStart = false, wheelPage1 = false, wheelPage2 = false, wheelPage3 = false, wheelPage4 = false, wheelPage5 = false, wheelPage6 = true">Где купить</button>
            <transition 
              name="showAnimat" 
              enter-active-class="animated fadeIn"
              leave-active-class="animated fadeOut"
            >
              <div class="header__btn__nav_block" v-if="show" >
                <button class="header__btn__nav" @click="wheelPageStart = false, wheelPage3 = true, wheelPage1 = false, wheelPage2 = false, wheelPage4 = false, wheelPage5 = false">Вкусные рецепты с MacChoco</button>
                <button class="header__btn__nav" @click="wheelPageStart = false, wheelPage4 = true, wheelPage1 = false, wheelPage2 = false, wheelPage3 = false, wheelPage5 = false">Новости</button>
                <button class="header__btn__nav" @click="wheelPageStart = false, wheelPage5 = true, wheelPage1 = false, wheelPage2 = false, wheelPage3 = false, wheelPage4 = false">О компании</button>
              </div>
            </transition>
          </div>                
          <ul class="burger" @click="show = !show" :class="{ open: show }">
            <li class="burger__line"></li>
            <li class="burger__line burger__line--hidden"></li>
            <li class="burger__line"></li>
          </ul>
        </div>
      </div>        
    </div>  
    
    <transition
      name="showAnimat"
      mode="out-in"
      enter-active-class="animated fadeIn"
      leave-active-class="animated fadeOut"
    >      
      <div class="" @wheel="wheelStart" v-if="wheelPageStart" key="sucessStart">
        <PageStart/>
        <div class="footer">
          <div class="container">
            <div class="arrow" @click="clickStart">
              <img src="@/img/Union.png" alt="">
            </div>
          </div>      
        </div>
      </div>
      <div class="" @wheel="wheel1" v-if="wheelPage1" key="sucess1">
        <PageOne/>
        <div class="footer">
          <div class="container">
            <div class="arrow" @click="click1">
              <img src="@/img/Union.png" alt="">
            </div>
            <div class="footer__socicon_block">
              <a href="#" class="footer__socicon"><i class="fab fa-twitter"></i></a>
              <a href="#" class="footer__socicon"><i class="fab fa-instagram"></i></a>
            </div>
          </div>      
        </div>
      </div>
      <div class="" @wheel="wheel2" v-if="wheelPage2" key="sucess2">
        <PageTwo/>
        <div class="footer">
          <div class="container">
            <div class="arrow" @click="click2">
              <img src="@/img/Union.png" alt="">
            </div>
          </div>      
        </div>
      </div>
      <div class="" @wheel="wheel3" v-if="wheelPage3" key="sucess3">
        <PageRecipes/>
        <div class="footer">
          <div class="container">
            <div class="arrow" @click="click3">
              <img src="@/img/Union.png" alt="">
            </div>
          </div>      
        </div>
      </div>
      <div class="" @wheel="wheel4" v-if="wheelPage4" key="sucess4">
        <PageNews/>
        <div class="footer">
          <div class="container">
            <div class="arrow" @click="click4">
              <img src="@/img/Union.png" alt="">
            </div>
          </div>      
        </div>
      </div>
      <div class="" @wheel="wheel5" v-if="wheelPage5" key="sucess5">
        <PagePrelast/>
        <div class="footer">
          <div class="container">
            <div class="arrow" @click="click5">
              <img src="@/img/Union.png" alt="">
            </div>
          </div>      
        </div>
      </div>
      <div class="" @wheel="wheel6" v-if="wheelPage6" key="sucess6">
        <PageScore/>
        <div class="footer">
          <div class="container">
            <div class="footer__block">
              <div class="footer__socicon_block">
                <a href="#" class="footer__socicon"><i class="fab fa-twitter"></i></a>
                <a href="#" class="footer__socicon"><i class="fab fa-instagram"></i></a>
              </div>
              <p class="footer__сopyright">© 2019 Food Empire Ltd. All rights reserved.</p>
            </div>
            <div class="footer__kruche_block">
              <a href="https://kruchenas.net/" class="footer__kruche">
                <img src="@/img/logo_kruche.png" alt="">
                <span>Дизайн и разработка сайта</span>
              </a>
              <a href="/" class="footer__arrow">
                <i class="fas fa-angle-up"></i>
              </a>
            </div>
          </div>      
        </div>
      </div>
    </transition>
    
  </div>
</template>

<script>
// import Header from './components/Header'
import PageStart from './components/PageStart'
import PageOne from './components/PageOne'
import PageTwo from './components/PageTwo'
import PageRecipes from './components/PageRecipes'
import PageNews from './components/PageNews'
import PagePrelast from './components/PagePrelast'
import PageScore from './components/PageScore'


export default {
  name: 'App',
  data: () => ({
    wheelPageStart: true,
    wheelPage1: false,
    wheelPage2: false,
    wheelPage3: false,
    wheelPage4: false,
    wheelPage5: false,
    wheelPage6: false,
    show: false,
    preload: true,
    images: [
      {
        imgPreload: require('@/img/c1(1).png')
      },
      {
        imgPreload: require('@/img/c1.png')
      },
      {
        imgPreload: require('@/img/c3.png')
      },
      {
        imgPreload: require('@/img/Depositphotos_7234343_ds.jpg')
      },
      {
        imgPreload: require('@/img/Depositphotos_89894700_xl-2015.jpg')
      },
      {
        imgPreload: require('@/img/Group 4.png')
      },
      {
        imgPreload: require('@/img/Group 47.png')
      },
      {
        imgPreload: require('@/img/Hand.png')
      },
      {
        imgPreload: require('@/img/image 7.png')
      },
      {
        imgPreload: require('@/img/image1.png')
      },
      {
        imgPreload: require('@/img/image2.png')
      },
      {
        imgPreload: require('@/img/image3.png')
      },
      {
        imgPreload: require('@/img/image4.png')
      },
      {
        imgPreload: require('@/img/Rectangle 5(1).png')
      },
      {
        imgPreload: require('@/img/Rectangle 5.png')
      },
      {
        imgPreload: require('@/img/Rectangle 28.png')
      },
      {
        imgPreload: require('@/img/Rectangle1.png')
      },
      {
        imgPreload: require('@/img/Rectangle2.png')
      },
      {
        imgPreload: require('@/img/Rectangle3.png')
      },
      {
        imgPreload: require('@/img/Rectangle4.png')
      },
      {
        imgPreload: require('@/img/logo.png')
      }
    ]
  }),
  components: {
    PageStart,
    PageOne,
    PageTwo,
    PageRecipes,
    PageNews,
    PagePrelast,
    PageScore
  },
  mounted: function () {
    var preloader    = document.querySelector('.preloader'), // селектор прелоадера
        imagesCount  = document.querySelectorAll('img').length, // количество изображений
        percent      = 100 / imagesCount, // количество % на одну картинку
        progress     = 0, // точка отсчета
        loadedImg    = 0; // счетчик загрузки картинок

    this.widthActive = loadedImg

    if (imagesCount > 0) {
      for (var i = 0; i < imagesCount; i++) { // создаем клоны изображений
        var img_copy        = new Image();
        img_copy.src        = document.images[i].src;
        img_copy.onload     = img_load;
        img_copy.onerror    = img_load;
      }

      function img_load () {
        progress += percent;
        loadedImg++;
        if (progress >= 100 || loadedImg == imagesCount) {
            document.querySelector('.preloader').remove()
        }
        document.querySelector('.preloader__line__active').style.width = progress + '%'
      }
    } else {
      document.querySelector('.preloader').remove()
    }
  },
  methods: { 
    clickStart: function(){
      this.wheelPageStart = false
      this.wheelPage1 = true
    },
  	click1: function(){
      this.wheelPage1 = false
      this.wheelPage2 = true
    },
    click2: function(){
      this.wheelPage2 = false 
      this.wheelPage3 = true
    },
    click3: function(){
      this.wheelPage3 = false
      this.wheelPage4 = true
    },
    click4: function(){
      this.wheelPage4 = false
      this.wheelPage5 = true
    },
    click5: function(){
      this.wheelPage5 = false
      this.wheelPage6 = true
    },
    wheelStart: function(ev){
    	if (ev.deltaY > 0) {
        this.wheelPageStart = false
        this.wheelPage1 = true
      }
    },
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
    	if (ev.deltaY > 0) {
        this.wheelPage3 = false
        this.wheelPage4 = true
      }
      if (ev.deltaY < 0) {
		    this.wheelPage3 = false   
        this.wheelPage2 = true  
      }
    },
    wheel4: function(ev){
    	if (ev.deltaY > 0) {
        this.wheelPage4 = false
        this.wheelPage5 = true
      }
      if (ev.deltaY < 0) {
		    this.wheelPage4 = false   
        this.wheelPage3 = true  
      }
    },
    wheel5: function(ev){
    	if (ev.deltaY > 0) {
        this.wheelPage5 = false
        this.wheelPage6 = true
      }
      if (ev.deltaY < 0) {
		    this.wheelPage5 = false   
        this.wheelPage4 = true  
      }
    },
    wheel6: function(ev){
      if (ev.deltaY < 0) {
		    this.wheelPage6 = false   
        this.wheelPage5 = true  
      }
    }
  }
}
</script>
