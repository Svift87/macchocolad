<template>
  <div class="cookies__container">
    <div class="cookies__zone cookies__left-zone" @mousemove="scrollLeft"></div>
    <div class="cookies__zone cookies__right-zone" @mousemove="scrollRight"></div>
    <div class="title_container container">
      <h1 class="title_page">Узнай что тебя ждет вместе с MacChocolate</h1>
      <p class="title_discription">Выбери печенье с предсказанием</p>      
    </div>
    <div class="cookies__block" ref="scrollBox">
      <div class="cookies__scroling">
        <p style="display: none">{{ windowWidth }}</p>
        <div
          class="cookies"
          v-for="item in allText"
          :key="item.id"
          :data-text="item.text"
          @click="cookiesTextOn(item.text)"
          ref="tester"
        ></div>
        <img src="http://www.maccoffee.ru/upload/iblock/c9d/c9d7af33cb52bcffda1dabac72e72355.png" alt class="cookies__product"/>
      </div>
    </div>
    <div class="cookies__footer container">
      <div class="cookies__arrow">Кнопка вниз</div>
      <div class="cookies__helper">Ассортимент</div>
      <div class="cookies__socicon">
        <a href class="twitter">twitter</a>
        <a href class="instagram">instagram</a>
      </div>
    </div>
    <div class="popap" v-if="popapShow">
      <div class="popap__bg" @click="popapShow = !popapShow"></div>
      <div class="popap__container">
        <div class="closed" @click="popapShow = !popapShow"></div>
        <p>{{textPopap}}</p>
      </div>      
    </div>
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
    allText: [
      {
        text: "Текст для послания 1",
      },
      {
        text: "Текст для послания 2",
      },
      {
        text: "Текст для послания 3",
      },
      {
        text: "Текст для послания 4",
      },
      {
        text: "Текст для послания 1",
      },
      {
        text: "Текст для послания 2",
      },
      {
        text: "Текст для послания 3",
      },
      {
        text: "Текст для послания 4",
      },
      {
        text: "Текст для послания 1",
      },
      {
        text: "Текст для послания 2",
      }
    ]
  }),
  mounted: function () {
    let arr = []
    let diapazon = 2560 / this.allText.length
    
    setTimeout(() => {
      for (let i = 0; i < this.$refs.tester.length; i++) {
        let a = Math.round(0 - 0.5 + Math.random() * (this.bHeight - 100))
        let b = Math.round(0 - 0.5 + Math.random() * (diapazon - 100)) + (diapazon * i)
        let obj = {a, b}
        arr.push(obj)
        this.$refs.tester[i].style.top = a + 'px'
        this.$refs.tester[i].style.left = b + 'px'
      }
    }, 0);
    this.$refs.scrollBox.scrollLeft = this.$refs.scrollBox.scrollWidth / 2 - window.innerWidth / 2
    window.onresize = () => {
      this.windowWidth = window.innerWidth
      this.bHeight = window.innerHeight - 100   
      this.$refs.scrollBox.scrollLeft = this.$refs.scrollBox.scrollWidth / 2 - window.innerWidth / 2
    }
  },
  methods: {
    cookiesTextOn(i) {
      this.popapShow = true
      this.textPopap = i
    },
    randomaser: function(b) {
      if (b== 2) {
        let rand = 0 - 0.5 + Math.random() * (2560 - 100);
        return Math.round(rand) + 'px';
      } else if (b== 1) {
        let rand = 0 - 0.5 + Math.random() * (this.bHeight - 100);
        return Math.round(rand) + 'px';
      }
    },
    scrollLeft: function() {
      this.$refs.scrollBox.scrollLeft -= 2  
    },
    scrollRight:  function() {
      this.$refs.scrollBox.scrollLeft += 2  
    }
  },
};
</script>