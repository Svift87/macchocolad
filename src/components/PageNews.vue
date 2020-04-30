<template>
    <div>
        <div class="news">
            <div class="container">
                <h2 class="news__title">
                    {{title}}
                </h2>
            </div>        
            <div class="news__cart_container" ref="cartContainer">
                <div 
                    class="news__cart" 
                    v-for="(item, index) in news" 
                    :key="item.id"
                    ref="newsCart"
                    @click="popapInfoCard(item.imges, item.title, item.text, index)"
                >
                    <div class="news__cart__img_block">
                        <img :src="item.imges" alt="" class="news__cart__img">
                    </div>
                    <h3 class="news__cart__header">{{item.title}}</h3>
                    <p class="news__cart__data">{{item.data}}</p>
                </div> 
            </div>
            <div class="arrow-block arrow-block--news">
                <div class="arrow-slide arrow-slide_left" ref="left">
                    <i class="fas fa-angle-left"></i>
                </div>
                <div class="arrow-slide arrow-slide_right" ref="right">
                    <i class="fas fa-angle-right"></i>
                </div>
            </div>
        </div>
        <transition
            name="showAnimat"                         
            enter-active-class="animated fadeIn"
            leave-active-class="animated fadeOut"
        >
            <div class="new_popap" v-if="popapShow">
                <div class="new_popap__bg" @click="popapShow = !popapShow"></div>    
                <div class="new_popap__container">
                    <div class="new_closed" @click="popapShow = !popapShow">
                        <i class="fas fa-times"></i>
                    </div>
                    <h2 class="new_popap__head">{{headPopap}}</h2>
                    <div class="new_popap__info">
                        <img :src="imgPopap" alt="">
                        <p class="new_popap__text">{{textPopap}}</p>
                    </div>           
                    <div class="new_popap__line"></div>
                    <div class="new_popap__btn_container">
                        <button class="new_popap__btn new_popap__btn--left" @click="leftNews"><i class="fas fa-angle-left"></i><span>Предыдущая новость</span></button>
                        <button class="new_popap__btn new_popap__btn--right" @click="rightNews"><span>Следующая новость</span><i class="fas fa-angle-right"></i></button>
                    </div>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
export default {
    name: "PageNews",
    data: () => ({
        title: 'Новости',
        news: [
            {
                imges: require('@/img/Rectangle1.png'),
                title: 'Какао с корицей и маршмеллоу1',
                data: '21 января',
                text: 'При прочих равных условиях отмучивание перемещает однокомпонентный гипнотический рифф. Ощущение мономерности ритмического движения возникает, как правило, в условиях темповой стабильности, тем не менее электрод имеет лирический громкостнoй прогрессийный период, и этот процесс может повторяться многократно. Аллегро имитирует однокомпонентный псевдомицелий, благодаря широким мелодическим скачкам. При прочих равных условиях отмучивание перемещает однокомпонентный гипнотический рифф. При прочих равных условиях отмучивание перемещает однокомпонентный гипнотический рифф. Ощущение мономерности ритмического движения возникает, как правило, в условиях темповой стабильности, тем не менее электрод имеет лирический громкостнoй прогрессийный период, и этот процесс может повторяться многократно. Аллегро имитирует однокомпонентный псевдомицелий, благодаря широким мелодическим скачкам. При прочих равных условиях отмучивание перемещает однокомпонентный гипнотический рифф.'
                
            },
            {
                imges: require('@/img/Rectangle2.png'),
                title: 'Какао с корицей и маршмеллоу2',
                data: '21 января',
                text: 'При прочих равных условиях отмучивание перемещает однокомпонентный гипнотический рифф. Ощущение мономерности ритмического движения возникает, как правило, в условиях темповой стабильности, тем не менее электрод имеет лирический громкостнoй прогрессийный период, и этот процесс может повторяться многократно. Аллегро имитирует однокомпонентный псевдомицелий, благодаря широким мелодическим скачкам. При прочих равных условиях отмучивание перемещает однокомпонентный гипнотический рифф. При прочих равных условиях отмучивание перемещает однокомпонентный гипнотический рифф. Ощущение мономерности ритмического движения возникает, как правило, в условиях темповой стабильности, тем не менее электрод имеет лирический громкостнoй прогрессийный период, и этот процесс может повторяться многократно. Аллегро имитирует однокомпонентный псевдомицелий, благодаря широким мелодическим скачкам. При прочих равных условиях отмучивание перемещает однокомпонентный гипнотический рифф.'
                
            },
            {
                imges: require('@/img/Rectangle3.png'),
                title: 'Какао с корицей и маршмеллоу3',
                data: '21 января',
                text: 'При прочих равных условиях отмучивание перемещает однокомпонентный гипнотический рифф. Ощущение мономерности ритмического движения возникает, как правило, в условиях темповой стабильности, тем не менее электрод имеет лирический громкостнoй прогрессийный период, и этот процесс может повторяться многократно. Аллегро имитирует однокомпонентный псевдомицелий, благодаря широким мелодическим скачкам. При прочих равных условиях отмучивание перемещает однокомпонентный гипнотический рифф. При прочих равных условиях отмучивание перемещает однокомпонентный гипнотический рифф. Ощущение мономерности ритмического движения возникает, как правило, в условиях темповой стабильности, тем не менее электрод имеет лирический громкостнoй прогрессийный период, и этот процесс может повторяться многократно. Аллегро имитирует однокомпонентный псевдомицелий, благодаря широким мелодическим скачкам. При прочих равных условиях отмучивание перемещает однокомпонентный гипнотический рифф.'
                
            },
            {
                imges: require('@/img/Rectangle4.png'),
                title: 'Какао с корицей и маршмеллоу44',
                data: '21 января',
                text: 'При прочих равных условиях отмучивание перемещает однокомпонентный гипнотический рифф. Ощущение мономерности ритмического движения возникает, как правило, в условиях темповой стабильности, тем не менее электрод имеет лирический громкостнoй прогрессийный период, и этот процесс может повторяться многократно. Аллегро имитирует однокомпонентный псевдомицелий, благодаря широким мелодическим скачкам. При прочих равных условиях отмучивание перемещает однокомпонентный гипнотический рифф. При прочих равных условиях отмучивание перемещает однокомпонентный гипнотический рифф. Ощущение мономерности ритмического движения возникает, как правило, в условиях темповой стабильности, тем не менее электрод имеет лирический громкостнoй прогрессийный период, и этот процесс может повторяться многократно. Аллегро имитирует однокомпонентный псевдомицелий, благодаря широким мелодическим скачкам. При прочих равных условиях отмучивание перемещает однокомпонентный гипнотический рифф.'
                
            },
            {
                imges: require('@/img/Rectangle1.png'),
                title: 'Какао с корицей и маршмеллоу5',
                data: '21 января',
                text: 'При прочих равных условиях отмучивание перемещает однокомпонентный гипнотический рифф. Ощущение мономерности ритмического движения возникает, как правило, в условиях темповой стабильности, тем не менее электрод имеет лирический громкостнoй прогрессийный период, и этот процесс может повторяться многократно. Аллегро имитирует однокомпонентный псевдомицелий, благодаря широким мелодическим скачкам. При прочих равных условиях отмучивание перемещает однокомпонентный гипнотический рифф. При прочих равных условиях отмучивание перемещает однокомпонентный гипнотический рифф. Ощущение мономерности ритмического движения возникает, как правило, в условиях темповой стабильности, тем не менее электрод имеет лирический громкостнoй прогрессийный период, и этот процесс может повторяться многократно. Аллегро имитирует однокомпонентный псевдомицелий, благодаря широким мелодическим скачкам. При прочих равных условиях отмучивание перемещает однокомпонентный гипнотический рифф.'
                
            },
        ],
        popapShow: false,
        textPopap: '',
        headPopap: '',
        imgPopap: '',
        indexNews: 0
    }),
    mounted: function () {
        this.$refs.cartContainer.style.cssText = 'padding-left:' + (window.innerWidth - document.querySelector('.container').offsetWidth) / 2 + 'px;transform: translateX(0px)'

        let transformSize = 0

        this.$refs.right.addEventListener('click', function() {
            let widthCart = document.querySelector('.news__cart').offsetWidth
            if (document.querySelector('.news__cart_container').offsetWidth > transformSize * -1 + widthCart*3) {
                transformSize -= widthCart
            }            
            document.querySelector('.news__cart_container').style.transform = 'translateX('+ transformSize +'px)'
        })

        this.$refs.left.addEventListener('click', function() {
            let widthCart = document.querySelector('.news__cart').offsetWidth
            if (transformSize <= -10) {
                transformSize += widthCart
            }            
            document.querySelector('.news__cart_container').style.transform = 'translateX('+ transformSize +'px)'
        })
    },
    methods: {   
        popapInfoCard(a, b, c, i) {
            this.indexNews = i
            this.popapShow = true
            this.headPopap = b
            this.textPopap = c
            setTimeout(() => {                
                document.querySelector('.new_popap__info img').setAttribute('src', a);
            }, 0);
        },
        leftNews() {
            if (this.indexNews <= 0) {
                this.indexNews = this.news.length - 1
            } else {
                this.indexNews = this.indexNews - 1
            }
            this.headPopap = this.news[this.indexNews].title
            this.textPopap = this.news[this.indexNews].text
            setTimeout(() => {   
                document.querySelector('.new_popap__info img').setAttribute('src', this.news[this.indexNews].imges);
            }, 0);
        },
        rightNews() {
            if (this.indexNews >= this.news.length - 1) {
                this.indexNews = 0
            } else {
                this.indexNews = this.indexNews + 1
            }
            this.headPopap = this.news[this.indexNews].title
            this.textPopap = this.news[this.indexNews].text
            setTimeout(() => {   
                document.querySelector('.new_popap__info img').setAttribute('src', this.news[this.indexNews].imges);
            }, 0);
        }
    },
}
</script>