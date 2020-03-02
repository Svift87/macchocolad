<template>
  <div class="cookies__container">
    <div class="title_container container">
      <h1 class="title_page">Узнай что тебя ждет вместе с MacChocolate</h1>
      <p class="title_discription">Выбери печенье с предсказанием</p>
    </div>
    <div class="cookies__block" ref="test">
      <div class="cookies__scroling" @mouseleave="move" >
        <div
          class="cookies"
          v-for="item in allText"
          :key="item.id"
          :data-text="item.text"
          @click="cookiesTextOn(item.text)"
          :style="{top: randomaser(1), left: randomaser(2)}"
        ></div>
        <img
          src="http://www.maccoffee.ru/upload/iblock/c9d/c9d7af33cb52bcffda1dabac72e72355.png"
          alt
          class="cookies__product"
        />
      </div>
    </div>
    <div class="cookies__footer container">
      <div class="cookies__arrow"></div>
      <div class="cookies__helper"></div>
      <div class="cookies__socicon">
        <a href class="twitter">twitter</a>
        <a href class="instagram">instagram</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PageOne",
  data: () => ({
    scrollB: 0,
    bHeight: window.innerHeight - 80,
    allText: [
      {text: "Текст для послания 1"},
      {text: "Текст для послания 2"},
      {text: "Текст для послания 3"},
      {text: "Текст для послания 4"}
    ]
  }),
  methods: {
    cookiesTextOn(i) {
      console.log(i)
    },
    move(a) {
      this.bHeight = window.innerHeight - 80
    },
    randomasereqw: function () {      
      this.scrollB = this.$refs.test.scrollWidth /2
      this.$refs.test.scrollLeft = this.scrollB
    },
    randomaser: function(b) {
      if (b== 2) {
        let rand = 0 - 0.5 + Math.random() * (3840 - 100 - 0 + 1);
        return Math.round(rand) + 'px';
      } else if (b== 1) {
        let rand = 0 - 0.5 + Math.random() * (this.bHeight - 100 - 0 + 1);
        return Math.round(rand) + 'px';
      }
    }
  }
};

</script>

<style lang="less">
.cookies {
  width: 100px;
  height: 100px;
  position: absolute;
  background-color: bisque;
  transition: 1s;
  top: calc(50% - 50px);
  left: calc(50% - 50px);
}
.cookies__container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  position: relative;
}
.title_container {
  width: 100%;
  text-align: center;
  color: #ffffff;
  position: absolute;
}
.cookies__footer {
  width: 100%;
  position: absolute;
  bottom: 0;
}
.cookies__block {
  width: 100%;
  height: calc(100vh - 80px);
  overflow-x: scroll;
}
.cookies__scroling {
  width: 3840px;
  height: 100%;
  position: relative;
}
.cookies__product {
  width: 200px;
  left: 50%;
  bottom: 5%;
  position: absolute;
}
.cookies__footer {
  position: absolute;
  bottom: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>